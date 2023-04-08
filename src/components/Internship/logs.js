const Logs = [
  {
    title: "Git and GitHub",
    image: "First Repo.png",
    date: "September 26, 2022",
    desc: (
      <>
        I completed half of the{" "}
        <a
          href="https://www.youtube.com/watch?v=RGOj5yH7evk&ab_channel=freeCodeCamp.org"
          target="_blank"
        >
          "
          <u style={{ color: "blue" }}>
            Git and GitHub for Beginners - Crash Course.
          </u>
          "
        </a>{" "}
        From this, I learned the difference between Git and GitHub, along with
        Git commands such as "git push", "git add", "git commit" and "git
        clone." Additionally, I learned the basically terminologies used when
        working with Git and GitHub. As well, I learned about SSH keys and
        learned to generate my own for my GitHub account. The only thing I would
        do differently is to clone with HTTPS rather than SSH.
      </>
    ),
  },

  {
    title: "Hosting A Website",
    image: "Website pic2.png",
    date: "September 27, 2022",
    desc: (
      <>
        I completed the other half of the{" "}
        <a
          href="https://www.youtube.com/watch?v=RGOj5yH7evk&ab_channel=freeCodeCamp.org"
          target="_blank"
        >
          <u style={{ color: "blue" }}>Crash Course.</u>
        </a>{" "}
        This went smoother than yesterday as through research and trying out
        various cloning methods, HTTPS was easier to clone with as it caused
        less errors compared to SSH. Once I finished the crash course. I watched
        a{" "}
        <a
          href="https://www.youtube.com/watch?v=QyFcl_Fba-k&ab_channel=TheNetNinja"
          target="_blank"
        >
          <u style={{ color: "blue" }}>YouTube video</u>
        </a>{" "}
        about GitHub pages and how to host my own. I was successfully able to
        host my own{" "}
        <a href="https://fabienthich.github.io">
          <u style={{ color: "blue" }}>website</u>
        </a>{" "}
        as seen on the left. I have made some improvements to the website and I
        am currently working on pushing it out and updating it.
      </>
    ),
  },
  {
    title: "Introduction To React",
    image: "ToDoPic2.png",
    date: "September 28, 2022",
    desc: (
      <>
        I followed along a{" "}
        <a
          href="https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified"
          target="_blank"
        >
          {" "}
          <u style={{ color: "blue" }}>React Tutorial.</u>{" "}
        </a>
        This tutorial does not cover the complex concepts of React but does
        cover the basics of React. I did not get to finish the tutorial,
        however, I did follow alongside. The tutorial demonstrated how to create
        a To-Do List using React as well as using npm and npx commands. The
        photo on the left shows a To-Do List that displays tasks in the console
        that the user typed into the textbox. As well, I successfully changed my
        default website page from my README.md file to{" "}
        <a href="/home">
          {" "}
          <u style={{ color: "blue" }}>Home.</u>
        </a>
      </>
    ),
  },
  {
    title: "Click Counter",
    image: "First App.png",
    date: "September 29, 2022",
    desc: (
      <>
        I developed a clicking app, or a simpler version of Cookie Clicker
        through a{" "}
        <a
          href="https://www.youtube.com/watch?v=b9eMGE7QtTk&ab_channel=JavaScriptMastery"
          target="_blank"
        >
          {" "}
          <u style={{ color: "blue" }}>Crash Course.</u>
        </a>{" "}
        This tutorial involves the uses of "Props" and "Hooks" such as
        "useStates." This clicking app does not only let to add by one, but
        allows you to subtract by one as well. After finishing this tutorial, I
        gained a better understanding of React's format. To further familiarize
        myself with React, I started another tutorial, "
        <a
          href="https://www.youtube.com/watch?v=dGcsHMXbSOA&ab_channel=developedbyed"
          target="_blank"
        >
          <u style={{ color: "blue" }}>React Tutorial For Beginners</u>
        </a>
        " which puts more emphasis on the concepts and structures.
      </>
    ),
  },
  {
    title: "Attempting To Rewrite My Website In React",
    image: "Converting to React.png",
    date: "September 30, 2022",
    desc: (
      <>
        I began the process of rewriting my website using React. During this
        process, I created a{" "}
        <b>
          <i>component</i>
        </b>{" "}
        folder under my{" "}
        <b>
          <i>src</i>
        </b>{" "}
        folder which included Javascript contents for the header and body of the
        website. The React website to the left is identical to the website from
        September 27, 2022 (Hosting a Website). The only difference is that this
        websites navigation bar is still in the works and the "styles" for the
        Internship-Logs content needs to be converted into React format. I am
        working to solve these issues to create an exact replica.
      </>
    ),
  },
  {
    title: "Learning About Windows Shortcuts",
    image: "Shortcuts.png",
    date: "October 3, 2022",
    desc: (
      <>
        I started off the day of picking it up from where I left off. I
        successfully converted all of my <i>Internship-Logs</i> content into
        React format. As well I spent some time trying to resolve issues
        relating to React Routers and Switches. Unfortunately, I had no success
        but I got a lead from my mentor. Soon after, I had a meeting with my
        mentor to which he taught me windows shortcuts, which are essential to
        becoming a great software engineer. From this, I was able to navigate
        around my computer more effectively and efficiently without a mouse.
        Click image for{" "}
        <a href="shortcuts.txt" target="_blank">
          <u style={{ color: "blue" }}>Shortcuts Text File.</u>
        </a>
      </>
    ),
  },
  {
    title: "Switches and Routes",
    image: "Switch Error Solution.png",
    date: "October 4, 2022",
    desc: (
      <>
        I found a solution to the Switch error I had mentioned previously.
        Through research, I learned that <b>Routes</b> served the same purpose
        as <b>Switch</b>. After trial and error, I was successfully able to
        replace the use of Switches with Routes by importing <b>Routes</b> from{" "}
        <b>'react-router-dom'</b>. Additionally, I researched Route Paths
        through which I learned the concept of capitalizing the first letter
        when assigning the JavaScript file to an element; capitalizing the first
        letter would render the JavaScript file individually.
      </>
    ),
  },
  {
    title: "Classes And Formatting",
    image: "Using CSS ClassName.png",
    date: "October 6, 2022",
    desc: (
      <>
        My mentor advised me to take notice of processes I find myself
        constantly doing that take up time to-which I could have spent being
        more productive such as coding, debugging, researching etc… To my
        surprise, I found myself constantly using the same inline styling for my
        internship logs. This essentially led me to create CSS classes which I
        could reuse for future logs. As well, I figured out a solution to my
        text alignment and font size errors which originated from incorrect
        slash placements in tags when converting HTML to JSX.
      </>
    ),
  },
  {
    title: "Working On My Home Page",
    image: "React Homepage.png",
    date: "October 11, 2022",
    desc: (
      <>
        The main focus of today was to fix up on my internship formatting as
        well as adding the rest of my internship logs onto my react website.
        After doing so, I noticed that I have not touched my home page since I
        started my React journey. As such, I worked on my home page to hook the
        readers into the website. Additionally, I plan to work on my home page
        and give a proper introduction to the readers. My primary focus at the
        moment is to deploy my React website onto Github as soon as possible.
      </>
    ),
  },
  {
    title: "Launching My React Website",
    image: "Default Homepage.png",
    date: "October 12, 2022",
    desc: (
      <>
        Today was the day I officially launched my React website. As of right
        now, you are seeing two components on this website, a <b>Header</b>{" "}
        component and an <b>Internship</b> component. The <b>Header</b>{" "}
        component is the navigation bar which allows users to navigate between
        the linked pages on this website. The <b>Internship</b> component on the
        other hand is the content which varies on each linked page. My goal for
        the next little while is to publish my /home and /internship page rather
        than just my /<i>default</i> page. This means that if you refresh this
        page or the Home page, you will receive an error message but if you
        refresh the default page, it will work perfectly fine.
      </>
    ),
  },
  {
    title: "Adding Favicons",
    image: "favicon update.png",
    date: "October 13, 2022",
    desc: (
      <>
        I had a standup meeting with my mentor to discuss servers and how delays
        affect the updating process of a website. Hence, updates cannot be
        published onto a website instantly. To ensure website updates are
        successful, I can refresh without cache to display the HTTP response
        which would be a lot quicker than requesting from GitHub Page servers
        every time. Additionally, I added a favicon to this website. Originally,
        the favicon only appeared on the LocalHost but after carefully reviewing
        the code, I realized the path for the favicon was not set up correctly.
        After resolving this issue, the favicon successfully displayed onto this
        website.
      </>
    ),
  },
  {
    title: "Typewriter Effects",
    image: "Typewriter.png",
    date: "October 14, 2022",
    desc: (
      <>
        The typing animation on the Home page was created using the Typewriter
        package. This package enabled me to not only create a typing effect, but
        also enabled me to implement a pause effect, followed by a delete
        effect, and then a new typing effect. My goal for the upcoming day is to
        remove the blinking cursor from the typewriting effect as I believe it
        makes the effect more visually appealing. Additionally, I created a
        project section in which I will be uploading some of the projects I have
        done from tutorials as well as some of my side projects I am working on.
        Some of these projects include the Click Counter and To-Do List app I
        made through React tutorials.
      </>
    ),
  },
  {
    title: "Multiple Components and Contact Forms",
    image: "Contacts.png",
    date: "October 17, 2022",
    desc: (
      <>
        At the start of the day, I looked into page loaders. Unfortunately, most
        required the use of scss files which I am unfamiliar with. After that, I
        worked on creating a contact application that allows users to connect
        with me via my website. I completed the basic format of the application.
        I am aiming to complete the backend of the form by the end of this week.
        As well, I learned how to display multiple components. In other words, I
        linked my <b>About Me</b> component to my <b>Home</b> component. This
        means that when the <b>Home</b> component is loaded, the <b>About Me</b>{" "}
        component will load under the <b>Home</b> component. Additionally, I
        added my calculator project that I have been working on through React
        tutorials.
      </>
    ),
  },
  {
    title: "Professional Summary and Interests",
    image: "Life and Interests.png",
    date: "October 19, 2022",
    desc: (
      <>
        I changed the colour of the scrollbar to match the theme of this
        website. I used the element <b>::-webkit-scrollbar…</b> to change the
        width size, background and hover colour. As well, I worked on my Home
        page. I wrote a summary of my <b>Professional Life</b> and built a
        template for my <b>Personal Interest</b>. Before building the template,
        I spent some time learning how to write multiple text paragraphs in the
        same line. For example, “Stock Market”, “Track and Field”, and “Cooking”
        are different text paragraphs but are on the same lines. The dashes (-)
        prove that the different text paragraphs cannot overstep each other as
        they will automatically move onto the next line. My task for the next
        little while is to work on the contents and images for my{" "}
        <b>Personal Interest</b>.
      </>
    ),
  },
  {
    title: "Learning Bootstrap",
    image: "Bootstrap Code.png",
    date: "October 20, 2022",
    desc: (
      <>
        I attempted to fix the 404 error on this website that would not allow
        the user to refresh any page except the home page without receiving an
        error. I had multiple blockers which led me to start learning Bootstrap
        as most solutions to the problem involved code that I could not
        recognize. I started off with watching a{" "}
        <a
          href="https://www.youtube.com/watch?v=Jyvffr3aCp0&ab_channel=WebDevSimplified"
          target="_blank"
        >
          <u style={{ color: "blue" }}>Bootstrap 5 Crash Course</u>
        </a>{" "}
        to get familiar with the framework. From this, I learned about
        containers, boxes, columns, and rows. As well, I messed around with
        resizing the rows and columns for small screens versus larger screens.
        Additionally, I added Bootstrap onto this website which led to a massive
        formatting issue resulting in text unalignment, image padding and link
        colours. As a result, I temporarily uninstalled Bootstrap from this
        website.
      </>
    ),
  },
  {
    title: "Learning Bootstrap Cont'd",
    image: "Bootstrap Testing.png",
    date: "October 21, 2022",
    desc: (
      <>
        I attempted to rewrite my <b>Personal Interests</b> using Bootstrap.
        During this process, I read the{" "}
        <a
          href="https://getbootstrap.com/docs/5.2/layout/grid/"
          target="_blank"
        >
          <u style={{ color: "blue" }}>Grid System Documents</u>
        </a>{" "}
        and revisited yesterday's video to obtain a better understanding of the
        framework. From this, I was able to style the column size for various
        screen sizes. As well I centered the images and texts as seen on the
        left. As of right now the code used to generate the image on the left
        can be seen at{" "}
        <b>
          <i>/components/Home/about-me</i>
        </b>
        , however, the code has been commented to prevent formatting errors on
        this current website. Additionally, I added row gaps between the images
        and texts. My task for the upcoming days is to rewrite my Professional
        Summary using Bootstrap.
      </>
    ),
  },
  {
    title: "Adding Bootstrap",
    image: "Personal Interests.png",
    date: "October 24, 2022",
    desc: (
      <>
        I worked on making the professional summary and personal interests in
        the home page responsive as well as making my Bootstrap code live on
        this website. I changed my screen size to various sizes to find the best
        preferred column units that correspond to the screen sizes; xs, md, lg,
        xl. Larger screens will allow users to see the image and texts of the
        professional summary and personal interest all in one row whereas small
        screens will view it as smaller rows stacked on top of each other.
        Additionally, I worked on changing the format from the default Bootstrap
        format to the normal or original format. For the next couple of days, I
        will work on reformatting the entire website.
      </>
    ),
  },
  {
    title: "Reformatting and Organising My Code",
    image: "Project Format.png",
    date: "October 25, 2022",
    desc: (
      <>
        I had a meeting with my mentor to discuss career paths and tech. After
        the meeting, given the amount of time I had, I wanted to rewrite my
        navbar using React-Bootstrap. However, I had not finished reformatting
        my website using Bootstrap, and so I worked on reformatting the text on
        my website using Bootstrap. I still have to reformat the Bitmoji image
        on the home page. But before I start on that, I made sure to look over
        my code as the last couple of days of learning Bootstrap has made me
        comment multiple lines of code in case I would need it again - which has
        made my code look messy and heavy. Additionally, I looked into my CSS
        files to find and delete any classes I am not using. As well, I removed
        some unnecessary CSS style padding so Bootstrap does not interfere with
        the CSS stylesheets.
      </>
    ),
  },
  {
    title: "React-Boostrap Navbar",
    image: "Unaligned Contact.png",
    date: "October 26, 2022",
    desc: (
      <>
        I created a hamburger dropdown menu using React-Bootstrap. I imported
        the Nav and Navbar components. From this, I was able to use elements
        such as <b>Navbar</b>, <b>Navbar.Brand</b>, <b>Navbar.Toggle</b>, and{" "}
        <b>Navbar.Collapse</b> to create a responsive navbar. As well, I need to
        clean up my CSS files again as I added a lot of new CSS styling for the
        new responsive navbar. When creating the CSS for this new navbar, I
        realized that I had been using styles for elements, not just styles for
        classes. With that being said, I need to reorganize my CSS files so they
        do not interfere with each other. Some of the blockers I encountered
        today originated from this interference. The unalignment in{" "}
        <a href="/projects">Projects</a> and <a href="contact">Contacts</a> was
        a result of this interference.
      </>
    ),
  },
  {
    title: "Making Home Page Responsive",
    image: "Professional Summary.png",
    date: "October 27, 2022",
    desc: (
      <>
        I spent some time reorganizing my CSS files and created new classes for
        my navigation links which counters the underlined navigation links and
        formatting errors which occurred while creating the hamburger dropdown
        menu. As well, I looked into styling the hamburger dropdown menu but I
        ended up putting it on hold as styling the hamburger menu would
        interfere with the larger screens version of this website. After that, I
        worked on making the rest of my Home page responsive. I am almost
        finished making the home page responsive as I still need to reformat the
        subheading, “Professional Summary” as well as the Bitmoji image. I did
        not necessarily run into any blockers, however, I somewhat jumped too
        many steps and needed to revisit basic Bootstrap Grid System materials
        before taking big steps.
      </>
    ),
  },
  {
    title: "Pull Requests and APIs",
    image: "Pull Request.png",
    date: "October 28, 2022",
    desc: (
      <>
        I had a meeting with my mentor to discuss the future plans regarding
        this internship. As well, I learned about Git and Github branches,
        specifically how to create, delete and navigate between branches.
        Additionally, I learned about pull requests and sent one to this
        website. The purpose of these tasks is to familiarize myself with these
        tools as these are essential when collaborating with others on a
        project. After that, I watched a{" "}
        <a
          href="https://www.youtube.com/watch?v=GZvSYJDk-us&ab_channel=freeCodeCamp.org"
          target="_blank"
        >
          YouTube video
        </a>{" "}
        about APIs to gain a better understanding of what they are and how they
        are used. A project idea that came to mind when watching this video was
        to create an app using an API which allows users to play a song, and the
        API would then display the name of the song, similar to Shazam. My goal
        for the next while is to explore and familiarize myself with APIs.
      </>
    ),
  },
  {
    title: "GET Requests",
    image: "JP Website.png",
    date: "October 31, 2022",
    desc: (
      <>
        I started the day continuing with the video mentioned in the previous
        log about APIs. From this, I better understood how the web works,
        specifically the process of receiving data from servers. I learned that
        a browser receives information through creating a HTTP request to a
        server along with a <b>Uniform Resource Identifier</b> (URI) and a HTTP
        verb, <b>GET</b> in our case. After that, I watched a{" "}
        <a
          href="https://www.youtube.com/watch?v=MouZdENJddQ&ab_channel=codebubb"
          target="_blank"
        >
          YouTube video
        </a>{" "}
        to help make a GET request. The code on the left outputs the data or
        HTML page that is associated with that Uniform Resource Locator (URL),
        in the console. As well, I swapped the URL with{" "}
        <i>“https://www.youtube.com/”</i> which ended up logging a ton of data.
        Additionally, I looked into APIs for tracking stocks. One in particular
        that caught my eye was the{" "}
        <a href="https://developer.tdameritrade.com/apis" target="_blank">
          TD Ameritrade API
        </a>
        .
      </>
    ),
  },
  {
    title: "Directory Commands",
    image: "Directory.png",
    date: "November 1, 2022",
    desc: (
      <>
        I resolved an issue that caused my code editor, VSCode, to handle excess
        folders that I did not mean for it to handle. My mentor brought this
        issue to my attention as he realized I had a large amount of files in my
        source control in VSCode which should not have been there. To resolve
        this issue, I had to use directory commands such as “<b>cd ..</b>” which
        directs the user to the home directly, “<b>ls -a</b>” which lists all
        files, and “<b>rm -rf .git</b>” which removes specific files from a Git
        repository. Additionally, I looked into another API,{" "}
        <a href="https://www.npmjs.com/package/node-stock-data" target="_blank">
          Node Stock Data
        </a>
        , which uses Node.JS to track stocks and get current or historical data
        on any stock. As well, I looked through a{" "}
        <a href="https://github.com/bbialke/node-stock-data" target="_blank">
          GitHub page
        </a>{" "}
        which demonstrates how to use the Node Stock Data API.
      </>
    ),
  },
  {
    title: "Comparing APIs",
    image: "API Compare.png",
    date: "November 3, 2022",
    desc: (
      <>
        I did more research on stock market APIs to which I can then create a
        Google Sheets to compare the pros and cons of each API. Some of the APIs
        I discovered are <a href="http://polygon.io/">Polygon.io</a>,{" "}
        <a href="https://finnhub.io/">Finnhub</a>, and{" "}
        <a href="https://www.alphavantage.co/">Alpha Vantage</a>. After
        comparing these three with Node Stock Data and TD Ameritrade API, I came
        to a conclusion that TD Ameritrade API and Polygon.io will most likely
        meet the needs of our program because they offer a reasonable amount of
        request limits, historical and fundamental data. After this, I tried to
        create a TD Ameritrade API account so I can start playing around with
        the API. During this process, I got several errors that stopped me from
        authenticating my account to receive the API key. In the meantime, I
        have decided to move onto playing around with Polygon.io.
      </>
    ),
  },
  {
    title: "Reformatting Internship Logs",
    image: "Format Logs.png",
    date: "November 4, 2022",
    desc: (
      <>
        I revisited Bootstrap to reformat the Internship Logs. To resolve
        conflicts between the CSS styles and Bootstrap styles, I had to go into
        the CSS stylesheets to remove unnecessary styling that would interfere
        with the Bootstrap styling. This means that the Internship Logs section
        is now fully responsive. Additionally, I discussed APIs with my mentor
        to which we can then proceed to create a program with that API to return
        the current price of a stock along with additional data such as
        historical and fundamental data. After discussing, we settled on{" "}
        <a href="https://twelvedata.com/" target="_blank">
          Twelve Data
        </a>{" "}
        to help us achieve this task. As well, I found a{" "}
        <a
          href="https://www.youtube.com/watch?v=egnRORUThx0&ab_channel=FundyCoding"
          target="_blank"
        >
          YouTube video
        </a>{" "}
        which demonstrates how to use the Twelve Data API using Node JS.
      </>
    ),
  },
  {
    title: "SEC.gov API",
    image: "Apple Info.png",
    date: "November 7, 2022",
    desc: (
      <>
        I had a meeting with my mentor to discuss how to use Git when
        collaborating with others on a project as well as new plans for the
        stock tracking project. Instead of using the Twelve Data API, I was
        tasked to explore the SEC.gov API which is essentially an APIs that
        returns the submission history of financial statements from public
        traded companies in JSON-formatted data. I had many blockers along the
        way which prevented me from using this API to return clean values of the
        revenue, income and profit margin of companies during a quarterly and
        annual time period. However, I did have success in creating a GET
        request to GET the submission history of Apple Inc along with
        information such as their address, phone number, and former names.
      </>
    ),
  },
  {
    title: "Form 10-K & 10-Q",
    image: "Apple 10-K.png",
    date: "November 8, 2022",
    desc: (
      <>
        I had a meeting with my mentor to discuss pull requests and comparing
        changes on GitHub. After that, I looked into where I could access the
        Form 10-K and 10-Q of a public traded company such as Apple Inc.
        Eventually, I found the 10-K and 10-Q Form for Apple Inc. This form
        includes data such as their net sales, cost of sales, operating
        expenses, operating income, and net income. My task is to display this
        information on a webpage. I started with researching how to read HTML
        data with JavaScript, however, I could not find a solution. Most
        solutions I came across were solutions to create a form to which users
        can upload files which displays the data in it. My task is to
        essentially eliminate the form to upload files and create a solution
        which reads HTML data using JavaScript.
      </>
    ),
  },
  {
    title: "Adding a Trade Entry",
    image: "Trade.png",
    date: "November 9, 2022",
    desc: (
      <>
        I worked on my mentor's personal website. I added a new trading entry to
        his investment portfolio section of his website, specifically the Tesla
        (TSLA) entry on November 9, 2022. To add this new entry, I had to work
        with JSON to enter the Date, Security, Ticker, Quantity, OrderType, and
        Price values associated with the stocks purchased. Additionally, I
        skimmed through the{" "}
        <a
          href="https://www.sec.gov/info/edgar/specifications/pds_dissemination_spec.pdf"
          target="_blank"
        >
          EDGAR Public Dissemination Service (PDS) Technical Specification
        </a>{" "}
        documents. From this, I was able to grasp the format for the accession
        number, which should include the CIK, last two digits of the year the
        submission was filed, and the sequence number. As well, I found the{" "}
        <a
          href="https://www.sec.gov/info/edgar/forms/edgform.pdf"
          target="blank"
        >
          Index to Forms
        </a>{" "}
        document which taught me about EDGAR submission types such as 10-K and
        10-Q.{" "}
      </>
    ),
  },
  {
    title: "Planning It Out",
    image: "CIK.png",
    date: "November 10, 2022",
    desc: (
      <>
        I had a meeting with my mentor to discuss specifics about my current
        project; to create a program with GET requests which displays companies
        net income and revenue. During this meeting, my mentor clarified the
        smaller steps in depth to help me understand the task better. As well, I
        clarified my understanding of the task with my mentor. Additionally, I
        was taught about the “document.getElementById” element to access
        specific information. After that, I did some research to access
        companies' 10-K forms. I found a URL link,
        “www.sec.gov/Archives/edgar/data/CIK/Accession Number/Name-Date.htm”
        which I could manipulate to find the 10-K forms of specific companies.
        For instance, I can use the CIK number to look up the file number, date
        and form type, 10-K in our case to which I can plug the data into the
        URL link. The only data I am missing for the URL link is the sequence
        number which is part of the accession number.
      </>
    ),
  },
  {
    title: "Accessing EDGAR",
    image: "APPL NetIncomeLoss.png",
    date: "November 11, 2022",
    desc: (
      <>
        I received feedback about my progression at North P&D as well the
        project I have been tasked with. Additionally, I followed along with my
        mentor to find the net income figures which are a key component to this
        project. My mentor discovered a way to access the financial data types
        of a company using the SEC.gov API for which could be used to look up
        specific information. Onced called, would return different types of
        information the API has on the company such as their accounts payables,
        operating expenses and net income just to name a few. Knowing what kinds
        of information the API offers, we can then access them through
        data.sec.gov/api/xbrl/companyconcept/CIK(#)/us-gaap/(Object).json” to
        find more specific information such as the figures for the accounts
        payables, operating expenses, and net income.
      </>
    ),
  },
  // {
  //   title: "",
  //   image: "",
  //   date: "",
  //   desc: <></>,
  // },
];

export default Logs;
