
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, width = "w-full" }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <button
            type="submit"
            className={`btn btn-primary ${width}`}
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <>
                    <span className="loading loading-spinner"></span> sending...
                </>
            ) : (
                text || "submit"
            )}
        </button>
    );
};

export default SubmitBtn;
