import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {FaChevronDown} from 'react-icons/fa';

interface CollapsibleSectionProps {
    icon: React.ReactNode;
    items: string[];
}

export const CollapsibleSection = ({icon, items}: CollapsibleSectionProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!items || items.length === 0) {
        return null;
    }

    const firstItem = items[0];
    const restItems = items.slice(1);

    return (
        <div>
            <div className="flex items-center gap-4">
                {icon}
                <div className="flex-1">
                    <span>{firstItem}</span>
                    {restItems.length > 0 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-sm hover:text-gray-600 transition-colors flex items-center gap-1"
                        >
                            (+{restItems.length} more)
                            <motion.div animate={{rotate: isExpanded ? 180 : 0}}>
                                <FaChevronDown/>
                            </motion.div>
                        </button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="pl-9 mt-2 overflow-hidden text-base"
                    >
                        <ul className="list-disc list-inside">
                            {restItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};