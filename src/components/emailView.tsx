import React from "react";
import "./emailView.scss";
import CustomButton from "./customButton";

const EmailView = (props: any) => {
  return (
    <div className="emailView-container">
      <div className="header">
        <p>Mensaje nuevo</p>
      </div>
      <div className="email-info">
        <div>
          <p>
            <span>Para:</span>
            <input placeholder="empresa@compa.com" />
          </p>
        </div>
        <div>
          <p>
            <span>Asunto:</span>
            <input placeholder="Mejoras para la página" />
          </p>
        </div>
      </div>
      <div className="divider" />
      <textarea className="email-body">
        Buenos dias la presente es para... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nihil cumque sequi mollitia nostrum a ad
        soluta reiciendis nisi dolorum suscipit iste delectus laborum, dolores
        nulla laboriosam laudantium eum tempora ipsa porro asperiores voluptates
        expedita. Voluptatibus saepe beatae nemo cumque dolorum sunt alias
        repellendus, ducimus deserunt voluptatum temporibus quisquam accusamus
        laborum odio explicabo eos ipsa qui provident fuga laboriosam quam
        mollitia, modi et. Cumque culpa voluptatum modi ipsa magnam sequi
        laudantium quas maxime alias a fugiat deleniti inventore suscipit quidem
        quos dolores, officiis magni perferendis voluptates eaque? Inventore
        eaque sapiente nesciunt consequuntur obcaecati eum earum, quaerat
        laborum labore explicabo repudiandae asperiores iusto hic ipsam
        cupiditate quia soluta veniam officia vel neque assumenda unde
        reiciendis. Fuga deleniti dicta dolor, incidunt iusto doloremque
        eveniet, alias molestias quae quaerat accusamus architecto sunt ducimus
        dignissimos, aliquid velit qui. Quod nam velit vitae sapiente deserunt
        aliquam inventore earum ipsum provident laudantium quidem accusamus iure
        aliquid voluptas consequatur aperiam autem itaque eius labore,
        accusantium quam ipsam sit officiis! Consectetur aliquam assumenda
        laudantium rem voluptatem tenetur perferendis sint sed veniam molestias,
        eligendi saepe, enim eum suscipit, natus id fuga explicabo aliquid?
        Corporis rem quibusdam iste quia sunt nesciunt cupiditate! Cupiditate
        qui velit laborum vel minima delectus temporibus rem. lorem300
      </textarea>
      <CustomButton name="Enviar" />
    </div>
  );
};

export default EmailView;
