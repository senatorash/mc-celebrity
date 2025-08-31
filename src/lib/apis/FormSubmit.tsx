export const FormSubmit = async (FormData: Record<string, unknown>) => {
  const url = import.meta.env.VITE_FORM_URL;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(FormData),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.log("something went wrong", response.statusText);
    }
    return data;
  } catch (error) {
    console.log("something went wrong", error);
  }
};
