import Typewriter from "typewriter-effect";

function TypewriterString(props:
    { data: string[] }) {
    return (
        <Typewriter
            options={{
                strings: props.data,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypewriterString;