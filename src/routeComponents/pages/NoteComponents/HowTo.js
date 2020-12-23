import React from "react";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

import {
  Container,
  FixHTML,
  Fix,
  Title,
  Tag,
  TagQueue,
  Button,
} from "./NoteStyles/page";

function HowTo() {
  return (
    <>
      <FixHTML></FixHTML>
      <Container>
        <Fix>
          <header>
            <Title>Getting Started</Title>
            <Tag>
              <TagQueue>Help</TagQueue>
              <TagQueue>Start</TagQueue>
              <TagQueue>Welcome</TagQueue>
            </Tag>
          </header>
          <MDEditor.Markdown
            source="
            <h2>Welcome to IronNotes</h2>
            <p>
              Welcome to our collective notebook! Here you can create new notes
              that you automatically share with your cohort at Ironhack!
            </p>
            <h3>Where to Begin?</h3>
            <p>
              To start creating notes it's easy! Just click on the blue button
              on the left bottom corner that says 'New Note', this will open
              the notes editor!
            </p>
            <h3>How to edit?</h3>
            <p>
              In the editor you can choose to use markdown laguage, HTML or the
              editor's own text formatting tools.
            </p>
            <p>
              First add a Title, then some tags so you can find yout notes later
              and finally write down your notes in the editor's window! Simple
              as that! The button in the end of the page let's you not only edit bit delete any page if you'd like to. BEWARE though, as collective notebook anyone can edit and delete anyone's notes so be mindful of your choices!
            </p>
            <br/>
            <h2>How does the editor work?</h2>
            <p>This is the editor toolbar, I'll explain each part:</p>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299347/ironnotes/Greetings/g_toolbar_abozjv.png' alt='Toolbar' />
            <hr/>
            <br/><br/>
            <p>This is the text editing area, each of the icons do the following:</p>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299346/ironnotes/Greetings/g_textedit_pepfml.png' alt='Text Edit Toolbar' />
            <br/><br/>
            <h3>Bold (B)</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_boldtext_pvsdww.png' alt='Bold Text' />
            <br/><br/>
            <h3>Italic (I)</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_italictext_pukspp.png' alt='Italic Text' />
            <br/><br/>
            <h3>Hashed Text (S)</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299346/ironnotes/Greetings/g_slashedtext_q8dkbq.png' alt='Hashed Text' />
            <br/><br/>
            <h3>Separator (HR)</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_hr_d0azdz.png' alt='Separator' />
            <br/><br/>
            <h3>Titles (TITL)</h3>
            <p>The default is with two hashtags but you can choose your size by adding or removing hashtags</p>
            <br/>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299346/ironnotes/Greetings/g_titles_fjcg0f.png' alt='Titles Editor' />
            
            <br/><hr/><br/>
            <p>This is the media editing area, each of the icons do the following:</p>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_mediaedit_qbrifh.png' alt='Media Edit Toolbar' />
            <br/><br/>
            <h3>Links</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_links_hnhifx.png' alt='Links' />
            <br/><br/>
            <h3>Comments/Quotes</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_comment_isyrsr.png' alt='Comments/Quotes' />
            <br/><br/>
            <h3>Highlighted Text</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_code_bs5lkj.png' alt='Highlighted Text' />
            <br/><br/>
            <h3>Images</h3>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608300612/ironnotes/Greetings/g_image_sqavhm.png' alt='Images' />
            <br/><hr/><br/>
            <p>This is the bullet points area, each of the icons do the following:</p>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299344/ironnotes/Greetings/g_bulletpoints_dvqr1w.png' alt='Bullet Points Toolbar' />
            <br/><br/>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608299345/ironnotes/Greetings/g_bullets_vf7ke5.png' alt='Bullet Points' />
            <br/><hr/><br/>
            <p>This is the editor view area.</p>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608300794/ironnotes/Greetings/g_editorview_rrliqn.png' alt='Editor View Toolbar' />
            <br/><br/>
            <p>The default editor view is the middle one, where you can see the unformatted text on the left and how it'll show on the right, but you can also just view the unformatted text (choosing the first icon), only the formatted text (choosing the icon to the right of the default) or view the editor in fullscreen (choosing the last icon).</p>
            <hr/>
            <br/>
            <h3>Bonus!</h3>
            <p>If you want to add formatted code to your notes, you can! Just add (```jsx) to the beginning of the code and (```) to the end of the code:</p>
            <img src='https://res.cloudinary.com/tassiaaccioly/image/upload/v1608301311/ironnotes/Greetings/g_code_zeccye.png' alt='Code Editing' />
            <br/><br/>
            <h2>How can I find my notes?</h2>
            <p>This is a collective notebook so the titles of all the notes will appear on the left side of the screen on the side menu. There you'll be able to find not only your notes but all your cohorts'. To find only your notes you can go to your profile. There you can find a list of all the notes your created</p>
            <h3>Using the search feature!</h3>
            <p>You can also use the search bar to find not only your friends' notes but using the filter you can also search by title and/or tags!</p>
            <br/>
            <h2>Classes' Quotes</h2>
            <p>This app also has a special library to hold the best memes/phrases said during classes and a special button (that little emoji on top) to get a random quote from the ones stored in our database! Use it wisely! (When I say wisely I mean make it funny for everyone!)</p>
            <p>Thank you for making an account, and we hope you share many important (and some not so important) notes with your cohort's mates! Make the best of your time at IronHack! And keep strong it'll all be worth it!</p>"
          />
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Link to="/pages/newpage">
              <Button>New Note</Button>
            </Link>
          </div>
        </Fix>
      </Container>
    </>
  );
}

export default HowTo;
