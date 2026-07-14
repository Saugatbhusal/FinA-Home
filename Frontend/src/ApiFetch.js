async function apiFetch(url, option = {}) {
    const res = await fetch(url, { credentials: "include", ...option })
    if (res.status == 401) {
        navigate("/signup", { state: { message: "please login to continue" } })
        throw new Error("Not authorized")
    }
    return res

}

export default apiFetch