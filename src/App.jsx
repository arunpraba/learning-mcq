import { questionsByCategory } from "./data";

import "./App.css";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import Quiz from "./components/Quiz";

const questionCategories = Object.keys(questionsByCategory);

function App() {
    const [selectedTopic, setSelectedTopic] = useLocalStorageState(
        "selectedTopic",
        undefined
    );

    const handleClear = () => {
        localStorage.clear();
        setSelectedTopic(questionCategories[0]);
        document.activeElement.blur();
    };

    return (
        <>
            <h2 style={{ marginTop: 0 }}>Learning Card</h2>
            <div className="btn-container">
                <div>
                    <button
                        onClick={handleClear}
                        style={{ background: "#fff" }}
                    >
                        Clear Storage
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                    }}
                >
                    {questionCategories.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => setSelectedTopic(topic)}
                        >
                            {topic}
                        </button>
                    ))}
                </div>
            </div>
            {questionsByCategory[selectedTopic]?.length ? (
                <Quiz key={selectedTopic} selectedTopic={selectedTopic} />
            ) : (
                <div>No Questions found / Choose topic</div>
            )}
        </>
    );
}

export default App;
