import Head from "next/head";
import Link from "next/link";

import {
  InfoPane,
  TitleView,
  SubtitleView,
  ParagraphView,
  UnorderedListView,
} from "../components/Views";
import {
  ContentContainer,
  TextContainer,
  formWidth,
  spacingL,
} from "../components/Layouts";

const terms = () => {
  return (
    <>
      <Head>
        <title>Scrumy Cards | Terms & Conditions</title>
      </Head>
      <InfoPane>
        <ContentContainer>
          <div style={{ width: `min(${formWidth * 2}px, 100%)` }}>
            <div style={{ margin: spacingL }}>
              <TitleView>Terms & Conditions</TitleView>
            </div>
            <TextContainer>
              <ParagraphView>
                These Website Standard Terms and Conditions written on this
                webpage shall manage your use of our website, Scrumy Cards
                accessible at scrumy.cards.
              </ParagraphView>
              <ParagraphView>
                These Terms will be applied fully and affect to your use of this
                Website. By using this Website, you agreed to accept all terms
                and conditions written in here. You must not use this Website if
                you disagree with any of these Website Standard Terms and
                Conditions. These Terms and Conditions have been generated with
                the help of the{" "}
                <a href="https://www.termsandcondiitionssample.com">
                  Terms And Conditions Template
                </a>{" "}
                and the{" "}
                <a href="https://www.terms-conditions-generator.com">
                  Terms and Conditions Generator
                </a>
                .
              </ParagraphView>
              <SubtitleView>Restrictions</SubtitleView>
              <ParagraphView>
                You are specifically restricted from all of the following:
              </ParagraphView>
              <UnorderedListView>
                <li>
                  selling, sublicensing and/or otherwise commercializing any
                  Website material;
                </li>
                <li>
                  using this Website in any way that is or may be damaging to
                  this Website;
                </li>
                <li>
                  using this Website in any way that impacts user access to this
                  Website;
                </li>
                <li>
                  using this Website contrary to applicable laws and
                  regulations, or in any way may cause harm to the Website, or
                  to any person or business entity;
                </li>
                <li>
                  engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website;
                </li>
              </UnorderedListView>
              <SubtitleView>Your Privacy</SubtitleView>
              <ParagraphView>
                Please read{" "}
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
                .
              </ParagraphView>
              <SubtitleView>No warranties</SubtitleView>
              <ParagraphView>
                This Website is provided "as is," with all faults, and Scrumy
                Cards express no representations or warranties, of any kind
                related to this Website or the materials contained on this
                Website. Also, nothing contained on this Website shall be
                interpreted as advising you.
              </ParagraphView>
              <SubtitleView>Limitation of liability</SubtitleView>
              <ParagraphView>
                In no event shall Scrumy Cards, nor any of its officers,
                directors and employees, shall be held liable for anything
                arising out of or in any way connected with your use of this
                Website whether such liability is under contract.  Scrumy Cards,
                including its officers, directors and employees shall not be
                held liable for any indirect, consequential or special liability
                arising out of or in any way related to your use of this
                Website.
              </ParagraphView>
              <SubtitleView>Indemnification</SubtitleView>
              <ParagraphView>
                You hereby indemnify to the fullest extent Scrumy Cards from and
                against any and/or all liabilities, costs, demands, causes of
                action, damages and expenses arising in any way related to your
                breach of any of the provisions of these Terms.
              </ParagraphView>
              <SubtitleView>Severability</SubtitleView>
              <ParagraphView>
                If any provision of these Terms is found to be invalid under any
                applicable law, such provisions shall be deleted without
                affecting the remaining provisions herein.
              </ParagraphView>
              <SubtitleView>Variation of Terms</SubtitleView>
              <ParagraphView>
                Scrumy Cards is permitted to revise these Terms at any time as
                it sees fit, and by using this Website you are expected to
                review these Terms on a regular basis.
              </ParagraphView>
              <SubtitleView>Assignment</SubtitleView>
              <ParagraphView>
                The Scrumy Cards is allowed to assign, transfer, and subcontract
                its rights and/or obligations under these Terms without any
                notification. However, you are not allowed to assign, transfer,
                or subcontract any of your rights and/or obligations under these
                Terms.
              </ParagraphView>
              <SubtitleView>Entire Agreement</SubtitleView>
              <ParagraphView>
                These Terms constitute the entire agreement between Scrumy Cards
                and you in relation to your use of this Website, and supersede
                all prior agreements and understandings.
              </ParagraphView>
              <SubtitleView>Governing Law & Jurisdiction</SubtitleView>
              <ParagraphView>
                These Terms will be governed by and interpreted in accordance
                with the laws of the State of at, and you submit to the
                non-exclusive jurisdiction of the state and federal courts
                located in at for the resolution of any disputes.
              </ParagraphView>
            </TextContainer>
          </div>
        </ContentContainer>
      </InfoPane>
    </>
  );
};

export default terms;
