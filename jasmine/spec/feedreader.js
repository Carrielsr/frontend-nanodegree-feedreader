/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL is defined', function() {

                for (let feed of allFeeds) {
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);
                }
            });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined', function() {

                for (let feed of allFeeds) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                }
            });
    });


    /* A new test suite named "The menu" */

        /* A test that ensures the menu element is
         * hidden by default.
         */

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('The menu', function() {
        const body = document.querySelector('body');

        it('is hidden', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('changes visibility when clicked', function() {
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    /* A new test suite named "Initial Entries" */

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry', function() {
            const feed = document.querySelector('.entry');
            expect(feed.length).not.toBe(0);
        });
});

    /* A new test suite named "New Feed Selection" */

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {

        let feedOne;
        let feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function(){
                feedOne = document.querySelectorAll('.feed.children');

                loadFeed(1, function(){
                    feedTwo = document.querySelectorAll('.feed.children');
                    done();
                });
            });
        });

        it('content changes', function() {
            expect(feedOne).not.toBe(feedTwo);
        });
    });

}());
