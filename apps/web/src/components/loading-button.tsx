import { Button } from "./ui/button";

export interface LoadingButtonProps extends React.ComponentProps<"button"> {
  isLoading: boolean;
}

export default function LoadingButton({
  isLoading,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </Button>
  );
}
