import { useEffect } from 'react';

export function useOpenGraphTags(data) {
  useEffect(() => {
    let elements = [];
    data.forEach(d => {
      const el = document.createElement('meta');
      el.setAttribute('property', 'og:' + d.name);
      el.setAttribute('content', d.content);
      elements.push(el);
      document.head.append(el);
    });
    return () => {
      elements.forEach(el => el.remove());
    };
  }, [data]);
}
