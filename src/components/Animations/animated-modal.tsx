"use client"

import React, { useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/util';

interface AnimatedModalProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
  triggerClassName?: string;
  overlayClassName?: string;
  viewportClassName?: string;
  contentClassName?: string;
  closeOnOverlayClick?: boolean;
}

export const AnimatedModal: React.FC<AnimatedModalProps> = ({
  trigger,
  title,
  children,
  triggerClassName,
  overlayClassName,
  viewportClassName,
  contentClassName,
  closeOnOverlayClick = true,
}) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen && triggerRef.current) {
      // Store the trigger button's position when opening
      setTriggerRect(triggerRef.current.getBoundingClientRect());
    }
    setOpen(isOpen);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          ref={triggerRef}
          type="button"
          className={cn(
            'appearance-none border-0 bg-transparent p-0 text-left',
            triggerClassName
          )}
        >
          {trigger}
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && triggerRect && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className={cn('fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]', overlayClassName)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  if (closeOnOverlayClick) {
                    setOpen(false);
                  }
                }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <div
                className={cn('fixed inset-0 z-[70] flex items-center justify-center p-4', viewportClassName)}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className={cn('w-full', contentClassName)}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x:
                      triggerRect.left +
                      triggerRect.width / 2 -
                      window.innerWidth / 2,
                    y:
                      triggerRect.top +
                      triggerRect.height / 2 -
                      window.innerHeight / 2,
                    rotateX: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x:
                      triggerRect.left +
                      triggerRect.width / 2 -
                      window.innerWidth / 2,
                    y:
                      triggerRect.top +
                      triggerRect.height / 2 -
                      window.innerHeight / 2,
                    rotateX: -15,
                  }}
                  transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 300,
                    duration: 0.25,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Dialog.Title className="sr-only">{title}</Dialog.Title>
                  {children}
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};