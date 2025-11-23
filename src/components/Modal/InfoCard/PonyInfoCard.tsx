import {observer} from "mobx-react-lite";
import {motion} from "framer-motion";
import {CollapsibleSection} from "../../CollapsibleSection.tsx";
import {FaBriefcase, FaExternalLinkAlt, FaHome, FaMars, FaVenus} from "react-icons/fa";
import {
    GiAngelWings,
    GiBull,
    GiDragonHead,
    GiHawkEmblem,
    GiHorseshoe,
    GiPerson,
    GiSittingDog,
    GiSparkles,
    GiUnicorn
} from "react-icons/gi";
import type Pony from "../../../interfaces/Ponies/Pony.ts";
import parseMultilineString from "../../../utils/parseMultilineString.ts";

interface PonyInfoCardProps {
    info: Pony
}

const kindToIconMap = {
    "Unicorn": <GiUnicorn className="text-purple-400 text-2xl" title="Unicorn"/>,
    "Earth": <GiHorseshoe className="text-green-500 text-2xl" title="Earth Pony"/>,
    "Alicorn": <GiSparkles className="text-yellow-300 text-2xl" title="Alicorn"/>,
    "Pegasus": <GiAngelWings className="text-yellow-300 text-2xl" title="Alicorn"/>,
    "Dragon": <GiDragonHead className="text-red-600 text-2xl" title="Dragon"/>,
    "Dog": <GiSittingDog className="text-red-600 text-2xl" title="Dragon"/>,
    "Human": <GiPerson className="text-teal-400" title="Human"/>,
    "Griffon": <GiHawkEmblem className="text-orange-400" title="Griffon"/>,
    "Yak": <GiBull className={'text-blue-400'} title={"Yak"}/>,
};


const PonyInfoCard = observer(({info}: PonyInfoCardProps) => (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {delay: 0}}}
        transition={{delay: 0.2}}
        className="p-8 flex flex-col text-black overflow-y-auto bg-white rounded-r-2xl backdrop-blur-lg "
    >
        <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50, transition: {delay: 0}}}
            transition={{duration: 0.5, delay: 0.2}}
        >
            <div className="mb-4">
                <div className="flex items-baseline gap-3">
                    <h2 className="text-4xl font-bold text-black">{info.name}</h2>
                    <a href={info.url} target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-gray-900 duration-300 transition-colors">
                        <FaExternalLinkAlt size={20}/>
                    </a>
                </div>

                {info.alias && (
                    <p className="text-lg text-gray-600 italic">"{info.alias}"</p>
                )}
            </div>

            <hr className="border-gray-300 my-4"/>

            <div className="flex flex-col items-start gap-4 text-xl">
                <div className="flex items-center gap-4">
                    {info.sex === 'Female'
                        ? <FaVenus className="text-2xl text-pink-400"/>
                        : <FaMars className="text-2xl text-blue-400"/>
                    }
                    <span>{info.sex}</span>
                </div>

                <CollapsibleSection
                    icon={<FaHome className="text-green-400"/>}
                    items={parseMultilineString(info.residence)}
                />
                <CollapsibleSection
                    icon={<FaBriefcase className="text-yellow-400"/>}
                    items={parseMultilineString(info.occupation)}
                />
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Kind:</h3>
                <div className="flex flex-wrap gap-4">
                    {info.kind?.map(k => (
                        <div
                            key={k}
                            className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-md"
                        >
                            {kindToIconMap[k] || '❓'}
                            <span>{k}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    </motion.div>
));

export default PonyInfoCard;