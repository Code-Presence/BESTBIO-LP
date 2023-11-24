import { useEffect, useRef } from 'react';

const useOnScreen = (setIsVisible, options) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, setIsVisible, options]);

    return ref;
};

export default useOnScreen;
