export const getCookie = (name: string) => {
  const cookies = document.cookie.split(";");
  let cookieValue = "";
  cookies.forEach(item => {
    if (item.search(name) !== -1) {
      cookieValue = item.split("=")[1];
    }
  });
  return cookieValue;
}

export const deleteCookie = (...names: any) => {
  names.forEach((item: string) => {
    document.cookie = `${item}= ; Expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
};

export const formatNumber: (number: number | undefined) => string = (number) => {
  return number?.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false }) || "";
};