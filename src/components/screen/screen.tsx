import "./screen.css";
import { Key } from "../../utils/keys";

type Props = {
    pressedKeys: Key[];
    solution: string;
};

export default function Screen({ pressedKeys, solution }: Props) {
    console.log(pressedKeys, solution);
    return (
        <div className={"screen"}>
            <h3>{solution.replace(".", ",")}</h3>
            <h1>
                {pressedKeys.map((key) => {
                    return key.appearance;
                })}
            </h1>
        </div>
    );
}
