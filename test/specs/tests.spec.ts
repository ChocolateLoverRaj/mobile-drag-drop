import { expect } from "chai";
import { DemoPage } from "../pages/demo.page";

describe( "demo", function() {

    const demoPage = new DemoPage();

    it( "should be able to perform drag and drop operation", function() {

        // try max. three times
        this.retries( 2 );

        demoPage.open();

        expect( demoPage.header.getText() ).to.contain( "mobile-drag-drop" );

        demoPage.dragItemToDropzone();
    } );
} );