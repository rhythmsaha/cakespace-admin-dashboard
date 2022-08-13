import { motion } from "framer-motion";

function BlurredScreen({ children }) {
    return (
        <motion.div
            className="fixed left-0  right-0 top-0 bottom-0 z-50 bg-black bg-opacity-20 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}
export default BlurredScreen;
