import useStore from "host/store";
import { useState } from "react";
import { Button } from "host/ui";

function App() {
	const { increment, decrement } = useStore();
	const [count, setCount] = useState(0);

	return (
		<div className="border-2 border-dashed border-amber-400 p-2">
			<h1 className="text-xl font-bold text-background">MFE2 Count: {count}</h1>
			<section className="grid grid-cols-1 m-5 gap-5">
				<div className="grid grid-cols-2 gap-4">
					<Button onClick={increment} variant="secondary">
						Host +1
					</Button>
					<Button onClick={decrement} variant="secondary">
						Host -1
					</Button>
				</div>
			</section>

			<section className="grid grid-cols-1 m-5 gap-5">
				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={() => setCount((prev) => prev + 1)}
						variant="secondary"
					>
						+1
					</Button>
					<Button
						onClick={() => setCount((prev) => prev - 1)}
						variant="secondary"
					>
						-1
					</Button>
				</div>
			</section>
		</div>
	);
}

export default App;

