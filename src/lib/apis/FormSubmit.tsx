export const FormSubmit = async (FormData: Record<string, unknown>) => {
  try {
    const response = await fetch(
      "https://formsubmit.co/ashimiseide@gmail.com",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(FormData),
      }
    );

    if (!response.ok) {
      console.log("something went wrong", response.statusText);
    }
  } catch (error) {
    console.log("something went wrong", error);
  }
};
