/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for FrontEnd', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be FrontEnd', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('FrontEnd');
    })
  });

  it('network-name should be supply-chain-management@0.0.4',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('supply-chain-management@0.0.4.bna');
    });
  });

  it('navbar-brand should be FrontEnd',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('FrontEnd');
    });
  });

  
    it('Commodity component should be loadable',() => {
      page.navigateTo('/Commodity');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Commodity');
      });
    });

    it('Commodity table should have 12 columns',() => {
      page.navigateTo('/Commodity');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  
    it('PO component should be loadable',() => {
      page.navigateTo('/PO');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('PO');
      });
    });

    it('PO table should have 7 columns',() => {
      page.navigateTo('/PO');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('Product component should be loadable',() => {
      page.navigateTo('/Product');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Product');
      });
    });

    it('Product table should have 5 columns',() => {
      page.navigateTo('/Product');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Project component should be loadable',() => {
      page.navigateTo('/Project');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Project');
      });
    });

    it('Project table should have 4 columns',() => {
      page.navigateTo('/Project');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Trade component should be loadable',() => {
      page.navigateTo('/Trade');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Trade');
      });
    });

    it('Trade table should have 5 columns',() => {
      page.navigateTo('/Trade');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Supplier component should be loadable',() => {
      page.navigateTo('/Supplier');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Supplier');
      });
    });

    it('Supplier table should have 4 columns',() => {
      page.navigateTo('/Supplier');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Accounting component should be loadable',() => {
      page.navigateTo('/Accounting');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Accounting');
      });
    });

    it('Accounting table should have 4 columns',() => {
      page.navigateTo('/Accounting');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('FinancingSources component should be loadable',() => {
      page.navigateTo('/FinancingSources');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('FinancingSources');
      });
    });

    it('FinancingSources table should have 4 columns',() => {
      page.navigateTo('/FinancingSources');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('ExtraPartners component should be loadable',() => {
      page.navigateTo('/ExtraPartners');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ExtraPartners');
      });
    });

    it('ExtraPartners table should have 4 columns',() => {
      page.navigateTo('/ExtraPartners');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('ExteriorCompany component should be loadable',() => {
      page.navigateTo('/ExteriorCompany');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ExteriorCompany');
      });
    });

    it('ExteriorCompany table should have 5 columns',() => {
      page.navigateTo('/ExteriorCompany');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('interiorCompany component should be loadable',() => {
      page.navigateTo('/interiorCompany');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('interiorCompany');
      });
    });

    it('interiorCompany table should have 5 columns',() => {
      page.navigateTo('/interiorCompany');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Constructor component should be loadable',() => {
      page.navigateTo('/Constructor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Constructor');
      });
    });

    it('Constructor table should have 4 columns',() => {
      page.navigateTo('/Constructor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('BuldingManager component should be loadable',() => {
      page.navigateTo('/BuldingManager');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('BuldingManager');
      });
    });

    it('BuldingManager table should have 4 columns',() => {
      page.navigateTo('/BuldingManager');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('SiteManager component should be loadable',() => {
      page.navigateTo('/SiteManager');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SiteManager');
      });
    });

    it('SiteManager table should have 4 columns',() => {
      page.navigateTo('/SiteManager');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('InitiatePO component should be loadable',() => {
      page.navigateTo('/InitiatePO');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('InitiatePO');
      });
    });
  
    it('TransferCommodity component should be loadable',() => {
      page.navigateTo('/TransferCommodity');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TransferCommodity');
      });
    });
  
    it('SetupDemo component should be loadable',() => {
      page.navigateTo('/SetupDemo');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SetupDemo');
      });
    });
  
    it('ChangeStateToInitiation component should be loadable',() => {
      page.navigateTo('/ChangeStateToInitiation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeStateToInitiation');
      });
    });
  
    it('ChangeStateToPlanning component should be loadable',() => {
      page.navigateTo('/ChangeStateToPlanning');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeStateToPlanning');
      });
    });
  
    it('ChangeStateToExecution component should be loadable',() => {
      page.navigateTo('/ChangeStateToExecution');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeStateToExecution');
      });
    });
  
    it('ChangeStateToMonitoring component should be loadable',() => {
      page.navigateTo('/ChangeStateToMonitoring');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeStateToMonitoring');
      });
    });
  
    it('ChangeStateToClosure component should be loadable',() => {
      page.navigateTo('/ChangeStateToClosure');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeStateToClosure');
      });
    });
  
    it('CreateTrade component should be loadable',() => {
      page.navigateTo('/CreateTrade');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateTrade');
      });
    });
  
    it('Assignproduct component should be loadable',() => {
      page.navigateTo('/Assignproduct');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Assignproduct');
      });
    });
  

});