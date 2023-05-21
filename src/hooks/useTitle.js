import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-111 funny`;
    }, [title])
}

export default useTitle;