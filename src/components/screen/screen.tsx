import "./screen.css";

type Props = {
    input: string;
    solution: string;
};

export default function Screen({ input, solution }: Props) {
    return (
        <div className={"screen"}>
            <h3>{solution}</h3>
            <h1>{input}</h1>
        </div>
    );
}
