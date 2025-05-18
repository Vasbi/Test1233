import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { type Risk, type InsertRisk, type InsertIssue } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useRiskStore } from '@/store';
import { useEffect } from 'react';
import { api } from '@/lib/apiClient';

export const useRisks = (projectId?: number) => {
  const { toast } = useToast();
  const { risks, setRisks, isLoading, setIsLoading } = useRiskStore();
  
  const queryKey = projectId 
    ? ['/api/risks', { projectId }] 
    : ['/api/risks'];
  
  const risksQuery = useQuery<Risk[]>({
    queryKey,
    queryFn: () => api.risks.list(projectId),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setRisks(risksQuery.data || []);
    setIsLoading(risksQuery.isLoading);
  }, [risksQuery.data, risksQuery.isLoading, setRisks, setIsLoading]);
  
  const createRiskMutation = useMutation({
    mutationFn: (risk: InsertRisk) => api.risks.create(risk),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/risks'] });
      toast({
        title: "Risk created",
        description: "The risk has been created successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to create risk",
        description: error instanceof Error ? error.message : String(error),
        variant: "destructive",
      });
    },
  });
  
  // PATCH risk
  const updateRiskMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<InsertRisk> }) => api.risks.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/risks'] });
      toast({ title: 'Risk updated', description: 'The risk has been updated.' });
    },
    onError: (error) => {
      toast({ title: 'Failed to update risk', description: error instanceof Error ? error.message : String(error), variant: 'destructive' });
    },
  });
  
  // DELETE risk
  const deleteRiskMutation = useMutation({
    mutationFn: (id: number) => api.risks.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/risks'] });
      toast({ title: 'Risk deleted', description: 'The risk has been deleted.' });
    },
    onError: (error) => {
      toast({ title: 'Failed to delete risk', description: error instanceof Error ? error.message : String(error), variant: 'destructive' });
    },
  });
  
  // Convert risk to issue
  const convertRiskToIssueMutation = useMutation({
    mutationFn: async ({ risk, issuePayload }: { risk: Risk; issuePayload: InsertIssue }) => {
      // Use centralized API helpers
      const newIssue = await api.issues.create(issuePayload);
      const updatedRisk = await api.risks.update(risk.id, {
        issueId: (newIssue as any).uniqueId, // Adjust if type differs
        riskStatus: 'Eventuated',
      });
      return { issue: newIssue, updatedRisk };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/risks'] });
      queryClient.invalidateQueries({ queryKey: ['/api/issues'] });
      toast({
        title: 'Risk converted to issue',
        description: 'The risk has been converted to an issue successfully.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Failed to convert risk to issue',
        description: error instanceof Error ? error.message : String(error),
        variant: 'destructive',
      });
    },
  });

  return {
    risks,
    isLoading,
    isError: risksQuery.isError,
    error: risksQuery.error,
    createRisk: createRiskMutation.mutate,
    updateRisk: updateRiskMutation.mutate,
    deleteRisk: deleteRiskMutation.mutate,
    convertRiskToIssue: convertRiskToIssueMutation.mutate,
    isCreating: createRiskMutation.isPending,
    isUpdating: updateRiskMutation.isPending,
    isDeleting: deleteRiskMutation.isPending,
    isConverting: convertRiskToIssueMutation.isPending
  };
};
export default useRisks;
