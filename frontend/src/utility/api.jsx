export const askquestion = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    return response;
};

export const login = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    return response;
};

export const logout = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};

export const register = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    return response;
};

export const fetchAllQuestion = async (category) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/all`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({category: category}),
      });
    return response;
};

export const likeaquestion = async (questionid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/like/${questionid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};
export const dislikeaquestion = async (questionid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/dislike/${questionid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};

export const answerQuestion = async (questionid,answer) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/answer/${questionid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({answer: answer}),
      });
    return response;
};

export const deletequestion = async (questionid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${questionid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};


export const deletereply = async (replyid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${replyid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};