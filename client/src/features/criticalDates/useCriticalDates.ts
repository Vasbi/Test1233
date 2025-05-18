// Feature-scoped hook for critical dates (modular, extensible)
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/apiClient';
import { type CriticalDate, type InsertCriticalDate } from '@shared/schema';
import { useCriticalDateStore } from '@/store';
import { useEffect } from 'react';

export const useCriticalDates = (projectId?: number) => {
  const queryClient = useQueryClient();
  const queryKey = projectId ? ['/api/critical-dates', { projectId }] : ['/api/critical-dates'];

  const { criticalDates: storeCriticalDates, setCriticalDates, isLoading: storeIsLoading, setIsLoading } = useCriticalDateStore();

  const { data: criticalDates = [], isLoading, error } = useQuery<CriticalDate[]>({
    queryKey,
    queryFn: () => api.criticalDates.list(projectId),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setCriticalDates(Array.isArray(criticalDates) ? criticalDates : []);
    setIsLoading(isLoading);
  }, [criticalDates, isLoading, setCriticalDates, setIsLoading]);

  const createCriticalDate = useMutation({
    mutationFn: (cd: InsertCriticalDate) => api.criticalDates.create(cd),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/critical-dates'] });
    },
  });

  const updateCriticalDate = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<InsertCriticalDate> }) => api.criticalDates.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/critical-dates'] });
    },
  });

  const deleteCriticalDate = useMutation({
    mutationFn: (id: number) => api.criticalDates.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/critical-dates'] });
    },
  });

  return {
    criticalDates: storeCriticalDates,
    isLoading: storeIsLoading,
    error,
    createCriticalDate: createCriticalDate.mutate,
    updateCriticalDate: updateCriticalDate.mutate,
    deleteCriticalDate: deleteCriticalDate.mutate,
    isCreating: createCriticalDate.isPending,
    isUpdating: updateCriticalDate.isPending,
    isDeleting: deleteCriticalDate.isPending,
  };
};

export default useCriticalDates;
