import './LanguageComponent.css';

export default function LanguageComponent() {
    return (
        <select className="form-select language-select">
            <option lang="en" label="English" value="en-IN" selected="">English</option>
            <option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option>
        </select>

    );
}