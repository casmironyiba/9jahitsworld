import React from "react";
import styled from "styled-components";
import boxProperty from "../fp/BoxProperty";
import { mediaQueries } from "../fp/MediaQueries";
import remsize from "../fp/Remsize";

const Container = styled.div`
  ${mediaQueries(`mobileS`)(`
    ${boxProperty(`100%`, remsize(430), "-1px auto", remsize(10), "#3333")};
    text-align: center;
    border-radius: 0px 0px 80px 0px;

    p {
      color: purple;
      font-size:.8rem;
    }
    `)};
  ${mediaQueries(`tablet`)(`
      
      p {
        font-size:1rem;

      }
      `)};
`;
interface Prop {
  (mandate: any): any;
}
const UserDescription: Prop = (props: any) => {
  if (props.mandate)
    return (
      <Container id="userdescription">
        <p>My name is Mandate, i am a blogger</p>
      </Container>
    );
  else
    return (
      <Container id="userDescription">
        <h6>
          Lorem optio expedita recusandae quibusdam vitae Consequuntur tempora
          vel blanditiis velit dicta Nostrum perspiciatis soluta perferendis
          omnis quibusdam Eligendi asperiores ab ratione odio aperiam Culpa sit
          unde illo perspiciatis cupiditate! Elit ut recusandae cupiditate dicta
          alias? Ratione aliquid ad ducimus ducimus minus. Veritatis aut
          obcaecati ratione a et sequi, eos. Facilis itaque aut fugiat corporis
          iusto eius fuga corporis? Assumenda Sit a molestias dolore repellendus
          nemo Vitae illo atque odio et quasi deleniti ipsam. Deleniti inventore
          hic laborum aperiam ipsum repellendus. Dolore quia sed animi eveniet
          ipsam Tempora commodi ea.
        </h6>
      </Container>
    );
};

export default UserDescription;
