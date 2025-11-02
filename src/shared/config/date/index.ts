export const formatDate = (date: string | Date) =>
  new Date(date).toLocaleString("ru-RU", {
    dateStyle: "short",
    timeStyle: "short",
  });
