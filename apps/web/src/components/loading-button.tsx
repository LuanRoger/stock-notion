import { LoadingText } from "./loading-text";
import { Button } from "./ui/button";

export interface LoadingButtonProps extends React.ComponentProps<"button"> {
  isLoading: boolean;
}

export default function LoadingButton({
  isLoading,
  children,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button className={className} disabled={isLoading} {...props}>
      {isLoading ? <LoadingText>Atualizando...</LoadingText> : children}
    </Button>
  );
}
