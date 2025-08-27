import useStore from "host/store";
import { useState } from "react";

function App() {
	const { increment, decrement } = useStore();
	const [count, setCount] = useState(0);

	return (
		<div className="border-2 border-dashed border-amber-400 p-2">
			<h1 className="text-xl font-bold">MFE2 Count: {count}</h1>

			<section className="grid grid-cols-1 m-5 gap-5">
				<div className="grid grid-cols-2 gap-4">
					<button onClick={increment} className="button">
						Host +1
					</button>
					<button onClick={decrement} className="button">
						Host -1
					</button>
				</div>
			</section>

			<section className="grid grid-cols-1 m-5 gap-5">
				<div className="grid grid-cols-2 gap-4">
					<button
						onClick={() => setCount((prev) => prev + 1)}
						className="button"
					>
						+1
					</button>
					<button
						onClick={() => setCount((prev) => prev - 1)}
						className="button"
					>
						-1
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;

