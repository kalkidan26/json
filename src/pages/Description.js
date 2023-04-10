import { useState } from "react";

const Description = () => {
    const [name, setName] = useState('icog');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('kal');
    }

    return (
        <div className="flex">
            <div className="w-1/4 bg-red-300 text-black text-left p-4">Left bBox</div>
            <div className="w-1/2 bg-gray-300 text-black text-left p-4">Right Box</div>
        </div>
    );
}

export default Description;