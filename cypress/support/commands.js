// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types = "Cypress"/>
///<reference types = "cypress-xpath"/>
function generateRandomName() {
    const adjectives = ['Happy', 'Silly', 'Clever', 'Adventurous', 'Friendly','Stuntman','Angry','Cute','Generous','Super','Lilliput','Blossom','Powerfull'];
    const nouns = ['Dog', 'Cat', 'Elephant', 'Monkey', 'Dolphin','Mario','Jordan','Dora','Car','Lion','Bear','Shinchan','Nobita','Mickey','Mouse','Nemo','Mimi','Roger','David'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  }

  // cypress/support/commands.js or your custom file

// Define a custom Cypress command to generate a random name
Cypress.Commands.add('generateRandomName', () => {
    const randomName = generateRandomName();
    return cy.wrap(randomName); // Wrap the random name to make it chainable
  });

  Cypress.Commands.add('findAndPrintBrokenLinks', () => {
    cy.get('a').each(($a) => {
      const link = $a.attr('href');
      
      // Validate the link using Cypress commands or custom validation logic
      if (link) {
        cy.request(link).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken Link: ${link} - Status Code: ${response.status}`);
          }
        });
      }
    });
  });
  Cypress.Commands.add('findAndPrintBrokenImages', () => {
    cy.get('img').each(($img) => {
      const src = $img.attr('src');
      
      // Validate the image using Cypress commands or custom validation logic
      if (src) {
        cy.request(src).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken Image: ${src} - Status Code: ${response.status}`);
          }
        });
      }
    });
  });

/*  Cypress.Commands.add('findAndPrintNonWorkingButtons', () =>{
    cy.get('button, [type="button"], [type="submit"], [type="reset"]').each(($button) => {
      const buttonText = $button.text().trim();
  
      // Save the current URL before clicking the button
      let originalUrl;
      cy.url().then((url) => {
        originalUrl = url;
      });
  
      // Click the button and check if it triggers any expected action
      cy.wrap($button).click({ force: true }).then(() => {
        // Check the state of your application or the expected behavior
        // For demonstration purposes, checking if a modal is opened
        // You should replace this with your specific application logic
        cy.get('.modal').should('not.exist');
        
        // If the expected action did not occur, log the button as non-working
        cy.log(`Non-Working Button: ${buttonText}`);
  
        // Navigate back to the original page
        cy.visit(originalUrl);
      });
    });
  }); */


  Cypress.Commands.add('verifyAllButtonsEnabledAndVisible', () => {
    cy.get('button, [type="button"], [type="submit"], [type="reset"]').each(($button) => {
      const buttonText = $button.text().trim();
  
      // Check if the button is enabled
      cy.wrap($button).should('be.enabled');
  
      // Check if the button is visible
       cy.wrap($button).should('be.visible');
  
      // If the button is not enabled or visible, log it in the console
      cy.log(`Button "${buttonText}" is not enabled or visible.`)
    });
  });

  import Typo from 'typo-js';

Cypress.Commands.add('checkSpelling', () => {
  // Load English dictionary
  const dictionary = new Typo('en_US');

  // Get all text content from the page
  cy.get('body').invoke('text').then((text) => {
    // Split text into words
    const words = text.split(/\s+/);

    // Check each word for spelling mistakes
    const misspelledWords = words.filter((word) => !dictionary.check(word.toLowerCase()));

    // Log misspelled words to the console
    if (misspelledWords.length > 0) {
      Cypress.log({
        name: 'Spelling Mistakes',
        message: `Found misspelled words: ${misspelledWords.join(', ')}`,
        consoleProps: () => ({ misspelledWords }),
      });
    }
  });
});

Cypress.Commands.add('checkAllButtonsEnabled', () => {
  cy.get('button').each(($button) => {
    const buttonText = $button.text().trim() || 'No text';
    const buttonId = $button.attr('id') || 'No ID';
    const buttonClass = $button.attr('class') || 'No class';
    
    if ($button.is(':disabled')) {
      // Log the information for disabled buttons
      cy.log(`Disabled Button: ${buttonText} (ID: ${buttonId}, Class: ${buttonClass})`);
    } else {
      // Log the information for enabled buttons (optional)
      cy.log(`Enabled Button: ${buttonText} (ID: ${buttonId}, Class: ${buttonClass})`);
    }
  });
});

Cypress.Commands.add('checkAllInputFieldsEnabled', () => {
  cy.get('input').each(($input) => {
    const inputLabel = $input.siblings('label').text().trim() || 'No label';
    const inputId = $input.attr('id') || 'No ID';
    const inputClass = $input.attr('class') || 'No class';

    if ($input.is(':disabled')) {
      // Log the information for disabled input fields
      cy.log(`Disabled Input Field: ${inputLabel} (ID: ${inputId}, Class: ${inputClass})`);
    } else {
      // Log the information for enabled input fields (optional)
      cy.log(`Enabled Input Field: ${inputLabel} (ID: ${inputId}, Class: ${inputClass})`);
    }
  });
});
Cypress.Commands.add('checkAllDropdownsEnabledAndVisible', () => {
  cy.get('select').each(($select) => {
    const selectLabel = $select.siblings('label').text().trim() || 'No label';
    const selectId = $select.attr('id') || 'No ID';
    const selectClass = $select.attr('class') || 'No class';

    if ($select.is(':disabled')) {
      // Log the information for disabled dropdowns
      cy.log(`Disabled Dropdown: ${selectLabel} (ID: ${selectId}, Class: ${selectClass})`);
    } else {
      // Check each option within the dropdown
      cy.wrap($select).find('option').each(($option) => {
        const optionText = $option.text().trim() || 'No text';
        const optionValue = $option.val() || 'No value';

        if ($option.is(':disabled') || !$option.is(':visible')) {
          // Log the information for disabled or invisible options
          cy.log(`- Disabled or Invisible Option: ${optionText} (Value: ${optionValue})`);
        }
      });
    }
  });
});

Cypress.Commands.add('verifyToggleButtons', () => {
  // Select all toggle buttons on the webpage (replace '.toggle-button' with your actual selector)
  cy.get("input[type='checkbox']").each((button) => {
    // Disable the button
    cy.wrap(button).should('not.be.disabled').invoke('attr', 'disabled', 'true');

    // Check if the button is actually disabled
    cy.wrap(button).should('be.disabled');

    // Enable the button
    cy.wrap(button).should('be.disabled').invoke('removeAttr', 'disabled');

    // Check if the button is actually enabled
    cy.wrap(button).should('not.be.disabled');
  });
});
///////////command to verify single dropdown
Cypress.Commands.add("verifyDropdownOptions", (dropdownSelector) => {
  cy.get(dropdownSelector).click(); // Click to open the dropdown

  cy.get(`${dropdownSelector} option`).each(($option) => {
    const optionText = $option.text();
    cy.wrap($option).click(); // Click each option

    // Check if the option is selected and visible
    cy.get(dropdownSelector).then(($dropdown) => {
      const selectedOption = $dropdown.find(":selected").text();
      if (selectedOption !== optionText) {
        cy.log(`"${optionText}" is not selectable or visible`);
      } else {
        cy.log("Dropdown is working fine");
      }
    });
  });
});
