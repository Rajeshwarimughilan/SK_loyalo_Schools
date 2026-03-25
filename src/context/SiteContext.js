import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { publicApi } from '../api/public';

const SiteContext = createContext({
  settings: null,
  loading: true,
  error: '',
  refresh: async () => {},
});

export function SiteProvider({ children }) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSettings = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await publicApi.getSiteSettings();
      setSettings(data);
    } catch (err) {
      setError(err.message || 'Unable to load site settings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const value = useMemo(
    () => ({ settings, loading, error, refresh: fetchSettings }),
    [settings, loading, error]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}
