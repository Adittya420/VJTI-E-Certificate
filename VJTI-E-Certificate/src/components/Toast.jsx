export const Toast = (props) => {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const selectedStatus = statuses[props.number - 1]; // Assuming props.number starts from 1

  useEffect(() => {
    if (selectedStatus) {
      toast({
        title: `${selectedStatus} toast`,
        status: selectedStatus,
        isClosable: true,
      });
    }
  }, [toast, selectedStatus]);

  return null;
};
