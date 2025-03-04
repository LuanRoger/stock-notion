import { toast } from "sonner";

export function showToast(message: string, description?: string) {
  toast(message, {
    position: "top-right",
    description,
  });
}

export function showErrorToast(message: string, description?: string) {
  toast.error(message, {
    position: "top-right",
    description,
  });
}
