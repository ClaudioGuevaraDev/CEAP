import Auth from "./auth";
import { MemoryRouter } from "react-router-dom";
import { mount } from "cypress/react";

describe("Auth Component", () => {
  it("Render component", () => {
    mount(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );
  });

  it("Debería aparecer el mensaje login al principio", () => {
    mount(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );
    cy.get("[id=title]").should("contain.text", "Iniciar Sesión");
  });

  it("Cambiar sección del auth", () => {
    mount(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );
    cy.get("[id=title]").should("contain.text", "Iniciar Sesión");
    cy.get("[id=section-auth]").should(
      "contain.text",
      "¿No tienes una cuenta registrada?"
    );
    cy.get("[id=button-submit]").should("contain.text", "Iniciar Sesión");
    cy.get("[id=section-auth]").click();
    cy.get("[id=section-auth]").should(
      "contain.text",
      "¿Ya tienes una cuenta registrada?"
    );
    cy.get("[id=title]").should("contain.text", "Registrarse");
    cy.get("[id=button-submit]").should("contain.text", "Registrarse");
  });

  it("Manejando los input del form", () => {
    mount(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    );
    const post = {
        email: "claudio@gmail.com",
        password: "123456"
    }
    cy.request("http://127.0.0.1:5000/api/login", post)
  });
});
