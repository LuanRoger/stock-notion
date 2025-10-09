"use client";

import {
  ComponentProps,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface CopyTextButtonProps {
  text: string;
  children: ReactNode;
  tooltipText?: string;
  buttonProps?: ComponentProps<typeof Button>;
  clicked?: { tooltipText: string; children: ReactNode };
}

export function CopyTextButton({
  text,
  children,
  tooltipText,
  buttonProps,
  clicked,
}: CopyTextButtonProps) {
  const [wasClicked, setWasClicked] = useState(false);

  useEffect(() => {
    if (!wasClicked) return;

    setTimeout(() => {
      setWasClicked(false);
    }, 2000);
  }, [wasClicked]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setWasClicked(true);
  }, []);

  const changeToClickedState = useMemo(
    () => !!clicked && wasClicked,
    [clicked, wasClicked]
  );

  const buttonContent = useMemo(() => {
    return (
      <Button onClick={() => copyToClipboard(text)} {...buttonProps}>
        {changeToClickedState ? clicked!.children : children}
      </Button>
    );
  }, [
    buttonProps,
    changeToClickedState,
    clicked,
    children,
    copyToClipboard,
    text,
  ]);

  const tooltipTextToShow = useMemo(
    () => (changeToClickedState ? clicked!.tooltipText : tooltipText),
    [changeToClickedState, clicked, tooltipText]
  );

  if (!tooltipText) {
    return buttonContent;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
      <TooltipContent>{tooltipTextToShow}</TooltipContent>
    </Tooltip>
  );
}
