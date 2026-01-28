export const askquestion = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/ask`, {
        method: "POST",
        credentials: "include",
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
        credentials: "include",
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
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};

export const register = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    return response;
};

export const fetchAllQuestion = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/all`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};

export const likeaquestion = async (questionid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/like/${questionid}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};
export const dislikeaquestion = async (questionid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/dislike/${questionid}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};

export const repltoquestion = async (formData) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/reply`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    return response;
};


export const getallreply = async (questionid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/replies/${questionid}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};


export const answerQuestion = async (questionid,answer) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/answer/${questionid}`, {
        method: "PATCH",
        credentials: "include",
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
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};


export const deletereply = async (replyid) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${replyid}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};