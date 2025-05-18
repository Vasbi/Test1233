import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
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
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setIssues(Array.isArray(issues) ? issues : []);
    setIsLoading(isLoading);
  }, [issues, isLoading, setIssues, setIsLoading]);

  // Create issue
  const createIssueMutation = useMutation({
    mutationFn: async (issue: InsertIssue) => {
      return await apiRequest(
        'POST',
        '/api/issues',
        issue
      ).then((res: Response) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/issues'] });
    },
  });

  // Update issue
  const updateIssueMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertIssue> }) => {
      return await apiRequest(
        'PATCH',
        `/api/issues/${id}`,
        data
      ).then((res: Response) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/issues'] });
    },
  });

  // Delete issue
  const deleteIssueMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiRequest(
        'DELETE',
        `/api/issues/${id}`
      );
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
