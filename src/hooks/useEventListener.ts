import { useEffect, useRef } from 'react';

export type EventListenerOptions = {
  enabled?: boolean;
  target?: GlobalEventHandlers;
};

export type EventListenerHook = (
  eventType: keyof GlobalEventHandlersEventMap,
  handler: (event: Event | MouseEvent) => void,
  options: EventListenerOptions,
) => void;

export const useEventListener: EventListenerHook = (
  eventType,
  handler,
  options,
) => {
  const { enabled = true, target = document } = options;
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    function internalHandler(event: Event) {
      return handlerRef.current(event);
    }

    target.addEventListener(eventType, internalHandler);

    // eslint-disable-next-line consistent-return
    return () => target.removeEventListener(eventType, internalHandler);
  }, [eventType, enabled, target]);
};
