import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/apiClient';
import type { Issue, InsertIssue } from '@shared/schema';
import { useIssueStore } from '@/store';

export const useIssues = (projectId?: number) => {
  const queryClient = useQueryClient();
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const { issues: storeIssues, setIssues, isLoading: storeIsLoading, setIsLoading } = useIssueStore();

  // Fetch issues
  const queryKey = projectId 
    ? ['/api/issues', { projectId }] 
    : ['/api/issues'];
  
  const { data: issues = [], isLoading, error } = useQuery({
    queryKey,
    queryFn: () => api.issues.list(projectId),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setIssues(Array.isArray(issues) ? issues : []);
    setIsLoading(isLoading);
  }, [issues, isLoading, setIssues, setIsLoading]);

  // Create issue
  const createIssueMutation = useMutation({
    mutationFn: (issue: InsertIssue) => api.issues.create(issue),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/issues'] });
    },
  });

  // Update issue
  const updateIssueMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<InsertIssue> }) => api.issues.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/issues'] });
    },
  });

  // Delete issue
  const deleteIssueMutation = useMutation({
    mutationFn: async (id: number) => {
      return await api.issues.delete(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/issues'] });
    },
  });

  return {
    issues: storeIssues,
    isLoading: storeIsLoading,
    error,
    selectedIssue,
    setSelectedIssue,
    createIssue: createIssueMutation.mutate,
    updateIssue: updateIssueMutation.mutate,
    deleteIssue: deleteIssueMutation.mutate,
    isCreating: createIssueMutation.isPending,
    isUpdating: updateIssueMutation.isPending,
    isDeleting: deleteIssueMutation.isPending,
  };
};
export default useIssues;
