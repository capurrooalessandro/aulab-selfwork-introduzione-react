import Field from "./Field";
import Group from "./Group";
import Title from "./Title";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";
import Card from "./Card";
import CardName from "./CardName";
import CardEmail from "./CardEmail";

export default function Form({ children, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="form-container">
            {children}
        </form>
    )
}

Form.Title = Title;
Form.Group = Group;
Form.Field = Field;
Form.NameInput = NameInput;
Form.EmailInput = EmailInput;
Form.SubmitButton = SubmitButton;
Form.Card = Card;
Form.CardName = CardName;
Form.CardEmail = CardEmail;