import React from "react";
import Obfuscate from "react-obfuscate";

class Homeowners extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalToggle: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      modalToggle: !prevState.modalToggle
    }));
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="title">
              Fair Housing Property Pro: For Homeowners’ Associations
            </h1>
            <p>
              As an HOA board member or property manager, do you really know{" "}
              <strong>YOUR</strong> fair housing rights? How are HOAs expected
              to know everything NEW about fair housing law, and manage the
              property?
            </p>
            <p>
              Fair Housing Advocates, Inc. recently dedicated its expertise to
              designing a comprehensive fair housing training & consulting
              package made solely for landlords and property managers of rental
              and homeowners communities:{" "}
              <strong>The Fair Housing Property Pro.</strong>
            </p>
            <p>
              Fair Housing Property Pro seeks to empower homeowners associations
              [HOAs], condominiums, apartment communities, mobile home parks,
              and their staff by protecting their fair housing rights. We
              provide exclusive knowledge about the fair housing complaint
              process only available from our insiders, so properties can avoid
              expensive fair housing discrimination claims long before they
              arise.
            </p>
            <h2>Who Are We?</h2>
            <p>
              We are fair housing experts, not hired attorneys coming to your
              defense after-the-fact.
            </p>
            <p>
              FHA’s experts filed several hundred fair housing complaints
              against properties like yours for violating the Fair Housing Act.
            </p>
            <p>
              FHA’s complaints against these properties are selected by HUD for
              investigation. With near perfect success, our fair housing
              complaint strategy yields a settlement agreement for our clients
              resulting in millions of damages for the properties to absorb.
            </p>
            As a result of our experience defending consumers’ rights, we have
            become experts in the fair housing complaint process. We understand
            the complete fair housing investigation cycle from complaint
            inception, submission through investigation, negotiations, and
            settlement. We can help you understand precisely how to protect your
            property. We can help you establish & protect your fair housing
            rights.
            <h3>What Can Fair Housing Advocates Do for My Property?</h3>
            <p>
              In 2018, FHA is putting all that knowledge and expertise to work
              for housing providers: HOAs, apartment complexes, condominiums,
              mobile home parks, and property management firms. We've designed a
              cost-effective program that will educate and train staff, mitigate
              risk, and ultimately help protect their business long before any
              fair housing issues become a huge financial problem. We provide
              the staff real-time access to our experts, while we work
              behind-the-scenes to identify, mitigate, and even eliminate high
              risk fair housing related problems. Our FHA experts know how to
              work with an Association’ legal counsel to formulate affirmative
              defense strategies during any fair housing disputes.
            </p>
            <h3>Why Do You Need Fair Housing Advocates?</h3>
            <h5>We know fair housing.</h5>
            <p>
              Because we have successfully filed hundreds of fair housing
              complaints against housing providers just like you, across the
              country, compelling settlements resulting in millions of dollars
              of damages.
            </p>
            <h5>We know the formula.</h5>
            <p>
              Because our fair housing IQ produces iron clad discrimination
              complaints HUD is motivated to investigate.
            </p>
            <h5>We know the process.</h5>
            <p>
              Because of our experience, we know the complete fair housing
              complaint process better than any organization offering
              conventional real estate management services.
            </p>
            <h5>We know the secrets.</h5>
            <p>
              Because we have worked with investigators all over the country, we
              have usable intelligence not typically shared with the public
              about the fair housing investigation process.
            </p>
            <h5>We know your fair housing rights.</h5>
            <p>
              Because our job was to know the property’s rights and anticipate
              their defenses in all of our successful cases.
            </p>
            <h3>Fair Housing Property Pro: For Homeowners’ Associations</h3>
            <p>
              This package is designed to best address fair housing issues faced
              by a Homeowners’ Association [single family homes and
              condominiums] managed by its board members, or managed by a
              property management company:
            </p>
            <ul>
              <li>
                Which governs access to the HOA’s amenities: swimming pool(s),
                club house, fitness center, BBQ and picnic areas, social events
                etc.
              </li>
              <li>Which enforces a pet policy</li>
              <li>Which may permit renters in its homeowners’ community</li>
              <li>Might have assigned parking</li>
              <li>Which may include disabled persons</li>
            </ul>
            <p>
              The Fair Housing Act still applies to bona fide Age Restricted
              [55+] communities provided the community does not discriminate on
              the basis of any other protected class.
            </p>
            <strong>I. Fair Housing Onboarding:</strong>
            <ol>
              <li>Rules, Regulations, and Policies Review</li>
              <li>Applicant and Resident Forms Review</li>
              <li>Reasonable Accommodations & Modifications Process Review</li>
              <li>Posted Rules Review</li>
            </ol>
            <strong>II. Core Services Package:</strong>
            <ol>
              <li>Specialized Fair Housing Training</li>
              <li>Fair Housing Property Testing</li>
              <li>ESA Letter Analysis </li>
              <li>Real-Time Fair Housing Consultation </li>
              <li>Online Footprint Review </li>
              <li>Board Member & Property Management Education Webinar </li>
              <li>Weekly Fair Housing Q&A Call </li>
            </ol>
            <h3>Fair Housing Property Pro: For Homeowners’ Associations</h3>
            <h4>I. Fair Housing Onboarding</h4>
            <p>
              This first step is necessary for FHA to uncover any fair housing
              related issues in the property’s documents, or in their policies
              and procedures. Once FHA has identified the HOA’s weaknesses, we
              can then suggest the customized training, and design deliverables
              to have the greatest positive impact.
            </p>
            <p>
              FHA approaches this Onboarding review process from the perspective
              of an experienced Fair Housing Advocate- “Would the HOA’s written
              rules, regulations, and policies provide an advocate enough reason
              to investigate the HOA, test the property, and file a fair housing
              complaint for a consumer alleging housing discrimination?”
            </p>
            <p>
              Suggested revisions to any such rules, regulations, policies or
              procedures could be provided, and approved by FHA’s own in-house
              legal counsel, to be approved by the HOA’s counsel and/or board
              members.
            </p>
            <div
              className={
                this.state.modalToggle
                  ? "modal is-active animated fadeIn"
                  : "modal"
              }
              id="modal"
            >
              <div className="modal-background" />
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    Rules, Regulations, and Policies Review:
                  </p>
                  <button
                    onClick={this.handleClick}
                    className="delete"
                    aria-label="close"
                  />
                </header>
                <section className="modal-card-body">
                  <p>
                    FHA will intake electronic copies of the association’s Rules
                    & Regulations to identify any potentially discriminatory
                    rules or practices. The following documents are most
                    relevant during the intake process:
                  </p>
                  <ul>
                    <li>Pool & Clubhouse Rules</li>
                    <li>Pool Use Agreement</li>
                    <li>Fitness Center Rules</li>
                    <li>Community Rules & Regulations</li>
                    <li>Community Bylaws & Covenants</li>
                    <li>Pet & Companion Animal Policy</li>
                    <li>Resident Policy/Renter’s Policy</li>
                    <li>Architectural Restrictions</li>
                    <li>New Resident Information</li>
                  </ul>
                </section>
                <footer className="modal-card-foot">
                  <button
                    className="button is-success"
                    onClick={this.handleClick}
                  >
                    Got it
                  </button>
                </footer>
              </div>
            </div>
            <button onClick={this.handleClick}>Click me</button>
            <h6>1. Rules, Regulations, and Policies Review:</h6>
            <p>
              FHA will intake electronic copies of the association’s Rules &
              Regulations to identify any potentially discriminatory rules or
              practices. The following documents are most relevant during the
              intake process:
            </p>
            <ul>
              <li>Pool & Clubhouse Rules </li>
              <li>Pool Use Agreement</li>
              <li>Fitness Center Rules </li>
              <li>Community Rules & Regulations </li>
              <li>Community Bylaws & Covenants </li>
              <li>Pet & Companion Animal Policy </li>
              <li>Resident Policy/Renter’s Policy </li>
              <li>Architectural Restrictions </li>
              <li>New Resident Information </li>
            </ul>
            <h6>2. Applicant & Resident Forms Review</h6>
            <p>
              FHA will review any forms the association might require their
              applicants and residents to complete during the housing
              application process- this may include forms which would grant use
              of the amenities, common areas, as well as pet registration.
            </p>
            <ul>
              <li>Resident Application </li>
              <li>Resident Authorization Form</li>
              <li>Pet Agreement </li>
              <li>Pet Addendum </li>
              <li>Club House Reservation/Rental</li>
            </ul>
            <h6>
              3. Reasonable Accommodations & Modifications Process Review:
            </h6>
            <p>
              The purpose of this service is to review and critique an already
              existing accommodation or modification review process flow.
              ‘Process flow’ could include documents but should really show how
              the staff and residents interact together during the interactive
              dialogue process to make appropriate fair housing related
              decisions. Documents would more likely be reviewed during the
              “Applicant & Resident Forms Review.”
            </p>
            <p>
              FHA can evaluate your existing written Reasonable Accommodations,
              and Reasonable Modifications review process if one is already in
              place. The evaluation will identify any concerns or violations
              already part of your process, and provide constructive feedback to
              mitigate, or even eliminate the risk.
            </p>
            <p>
              Once an acceptable review process is in place, your association
              would be eligible to participate in our “ESA Letter” analysis
              service.
            </p>
            <p>
              If your association does not have a formal accommodation or
              modification review process in place, FHA can develop one as a
              separate deliverable.
            </p>
            <p>Documents reviewed could include:</p>
            <ul>
              <li>
                Request for Reasonable Modification/Accommodation Verification
                Form
              </li>
              <li>Authorization for Release of Information</li>
              <li>Reasonable Accommodation Agreement </li>
            </ul>
            <span>
              FHA recommends any suggested changes in policy be reviewed and
              approved by the property’s legal counsel and/or board members.
            </span>
            <h6>4. Posted Rules Review</h6>
            <p>
              Many allegations of housing discrimination start with rules posted
              upon a placard at the HOA’s amenities and common areas. In some
              cases, the posted rules can differ from those printed in the
              official Rules & Regulations manual for the community causing
              confusion within the community’s staff and with the residents.
            </p>
            <p>
              FHA would review any posted rules to uncover any unnecessary risk,
              and to promote message uniformity between the posted rules, and
              the published rules-in-fact. FHA would be interested in receiving
              pictures of any of the following:
            </p>
            <ul>
              <li>Picture of posted Pool Rules</li>
              <li>Picture of posted Fitness Center rules</li>
              <li>Picture of Club House Rules</li>
            </ul>
            <h3>II. Core Services Package</h3>
            <p>
              The following eight services would be provided to our HOA clients
              after they have completed the fair housing onboarding process. The
              services would typically be provided over the life of a one-year
              agreement.
            </p>
            <p className="title is-4">
              1. Specialized Fair Housing Training & Education:
            </p>
            <p className="subtitle is-6 has-text-right">
              An FHA Flagship Fair Housing Service
            </p>
            <p>
              Our training modules are born from the hundreds of complaints FHA
              filed and negotiated on behalf of our consumer clients who alleged
              housing discrimination on the basis of their protected class.
            </p>
            <p>
              None of our training modules provide generic information like
              those from most national training organizations.
            </p>
            <p>
              FHA’s training modules are designed to provide housing providers
              with immediate actionable information and advice. All of our
              training is conducted Live and is conveniently hosted via webinar,
              so FHA can address questions as they are presented. An attendee
              would only need:
            </p>
            <ul>
              <li>Internet connection [for video] </li>
              <li>Phone [for audio]</li>
            </ul>
            <p>
              FHA training webinars could also feature special guest speakers
              from the fair housing, legal, and medical community. Only FHA’s
              clients are invited to attend our training modules and would have
              access to a recorded copy online.
            </p>
            <h6>Currently Available Fair Housing Training Modules:</h6>
            1. Reasonable Accommodations & Modifications for HOAs 2. Emotional
            Support Animals [ESAs]- Fake or Real? 3. ESA Letter Analysis- What
            Is a Real “ESA Letter”? 4. Familial Status Discrimination: Rules
            Against Children 5. Swimming Pool, Club House, and Fitness Center
            Rules 6. Medical Marijuana & Reasonable Accommodations 7. Advanced
            Understanding of the Fair Housing Complaint Process 8. RE Agents &
            Fair Housing Obligations 9. Race, Color, and National Origin
            Discrimination 10. Housing Discrimination & College Housing
            Obligations 11. Most Common Fair Housing Violations for Properties
            <p>
              Our Fair Housing Education modules are designed to be less formal
              and are built to provide broad knowledge to a less sophisticated
              audience on a general fair housing subject.
            </p>
            <strong>Currently Available Fair Housing Education Modules:</strong>
            1. Fair Housing Education for New Hires, Maintenance Staff, and
            Board Members 2. What is a Reasonable Accommodation? 3. Protected
            Class Discrimination & The Federal Fair Housing Act
            <p>
              FHA may invite special guest speakers from the fair housing,
              legal, civil rights, and medical community as well as other
              subject matter experts
            </p>
            <p>
              FHA hosts at least one Fair Housing Training webinar and one Fair
              Housing Education webinar each month, by invitation only.
            </p>
            <p className="is-small">
              *This service is also offered for purchase separately. Contact FHA
              at{" "}
              <Obfuscate
                email="info@fairhousingact.org"
                headers={{
                  subject:
                    "Question about Specialized Fair Housing Training & Education"
                }}
              />{" "}
              to make arrangements.
            </p>
            <p className="title is-4">2. Fair Housing Testing:</p>
            <p className="subtitle is-6 has-text-right">
              An FHA Flagship Fair Housing Service
            </p>
            <p>
              Testing is a very important enforcement tool approved by HUD, and
              it is a very effective means of gathering evidence when FHA files
              a fair housing complaint on behalf of a consumer. Our testing
              evidence is always critical to compelling a settlement.
            </p>
            <p>
              FHA can conduct testing upon your property and staff which most
              closely follows that recommended by HUD for fair housing
              organizations.
            </p>
            <p>
              FHA would conduct such testing only as an educational tool, not an
              enforcement tool, to uncover any potentially violative fair
              housing behavior. Our findings will serve to provide the property
              with actionable feedback, so the property can make adjustments
              accordingly.
            </p>
            <p>
              This ‘real world’ testing of your staff is critical to
              understanding how Fair Housing training and education is actually
              being implemented where it counts.{" "}
            </p>
            <p>
              A tester results report outlining any compliance concerns or
              violations can be provided at the conclusion of the testing
              investigation.
            </p>
            <h5>Testing Methods:</h5>
            <dl>
              <dt>a) Telephonic Testing:</dt>
              <dd>
                FHA will make contact with the association to engage the staff
                as a person seeking housing and challenge the association staff
                with a fair housing scenario- the test. Telephonic testing could
                include text messages exchanged with the association staff. An
                audio recording of the test call can be provided along with the
                tester’s report.
              </dd>
              <dt>b) Email Testing:</dt>
              <dd>
                FHA will make contact with the community to engage the staff as
                a person seeking housing and challenge the association staff
                with a fair housing scenario- the test. The test would involve
                email interactions with the association staff- this may include
                the submission of completed forms, and documents.
              </dd>
              <dt>c) Website Initiated Testing:</dt>
              <dd>
                Some associations have online forms on their websites. FHA will
                engage the association as a person seeking housing and challenge
                the association staff with a fair housing scenario- the test.
                The test will be initiated via the online form but may continue
                via telephone or email.
              </dd>
            </dl>
            <h5>Types of Testing:</h5>
            <dl>
              <dt>a) Service Skills:</dt>
              <dd>
                FHA would engage in a dialogue to measure both Fair Housing
                knowledge, as well as the staff member’s customer service
                skills, and ability to engage in the “interactive dialogue
                process,” a key component to the reasonable accommodation review
                process.
              </dd>
              <dt>b) Disability Testing:</dt>
              <dd>
                Most disability testing would not require a comparative since
                most discrimination is by treatment, or direct application of a
                discriminatory rule
                <ul>
                  <li>i. Reasonable Accommodation request</li>
                  <li>ii. Reasonable Modification request</li>
                </ul>
              </dd>
              <dt>c) Familial Status Testing:</dt>
              <dd>
                Most Familial Status testing would not require a comparative
                since most discrimination is by treatment, or direct application
                of a discriminatory rule
              </dd>
              <dt>d) Protected Class Comparative Testing:</dt>
              <dd>
                Race, Color, National Origin, Religion, and Sex/Gender. FHA can
                design tests using the available methods listed above to uncover
                discriminatory treatment on the basis of a protected class by
                implementing comparative testing methodology.
              </dd>
              <dt>e) Staff Member Specific Testing:</dt>
              <dd>
                FHA can work with the association to identify a particular
                member of their staff as the focus of a fair housing test.
              </dd>
              <dt>f) Role Specific Testing:</dt>
              <dd>
                FHA can also customize testing methodologies to measure the fair
                housing aptitude of:
                <ul>
                  <li>Property leasing agents</li>

                  <li>Property managers</li>
                  <li>HOA Board Members </li>
                  <li>
                    P/T & F/T staff members accepting in-bound phone calls
                    regarding housing availability{" "}
                  </li>
                  <li>
                    RE Agents and those immediately ‘outside’ of the property
                    staff
                  </li>
                </ul>
              </dd>
            </dl>
            <p className="is-small">
              *This service is also offered for purchase separately. Contact FHA
              at{" "}
              <Obfuscate
                email="info@fairhousingact.org"
                headers={{
                  subject: "Question about Specialized Fair Housing Testing"
                }}
              />{" "}
              to make arrangements.
            </p>{" "}
            <p className="title is-4">3. ESA Letter Analysis:</p>
            <p className="subtitle is-6 has-text-right">
              An FHA Flagship Fair Housing Service
            </p>
            <p>
              HOAs are getting inundated with requests to waive their pet rules
              to accommodate an Emotional Support Animal by a disabled applicant
              or resident.
            </p>
            <p>
              HUD’s accommodation review process permits the HOA to request
              “reliable documentation” from the disabled person which should
              verify the disability, and the need for their ESA as well as the
              requested accommodation. The housing provider is usually given an
              “ESA Letter,” or some other documentation [aka “doctor’s letter”]
              which needs to be properly evaluated.
            </p>
            <h6>
              Each ESA Letter Analysis would consider the following elements:
            </h6>
            a) Source “reliability” b) Disability verification c)
            Disability-related need verification d) Accommodation Requested e)
            Financial & Administrative burden f) Direct threat to Health &
            Safety g) Risk of substantial physical damage FHA can provide
            critical feedback about the “ESA Letter” so the housing provider can
            take next steps on their own in the interactive dialogue process as
            well as avoid potential fair housing pitfalls. FHA would receive any
            ESA Letter via email from the housing provider; likewise, FHA would
            provide academic feedback based only upon the language of the ESA
            Letter. FHA does not provide legal advice regarding the tenant’s
            housing eligibility requirements. The ESA Letter Analysis focuses
            solely on the construction of the letter and is not meant to be a
            strict “pass/no-pass” for the applicant’s housing eligibility since
            many factors are considered by the housing provider FHA would not
            have access to. \*This service is also offered for purchase
            separately. Contact FHA at info@fairhousingact.org to make
            arrangements. 4. Real-Time Fair Housing Consultation: An FHA
            Flagship Fair Housing Service FHA is available to provide real-time
            consultation to its clients at a moment’s notice or by appointment.
            All consultations are confidential. Should FHA be asked to provide
            customized fair housing advice to address a specific consumer
            situation which may lead to a fair housing claim or litigation, FHA
            would have its in-house counsel review, approve, and provide any
            such advice. Most meetings fall within one of two categories:
            Casual, and Critical. i. Casual: FHA is providing general fair
            housing education or answering questions as an extension of the fair
            housing training/education received. ii. Critical: FHA is tasked to
            review a critical situation involving a potential, or developing,
            fair housing issue which might require attention to documents,
            interactive dialogue, and case specifics. FHA’s counsel would be in
            attendance. Provided FHA can help resolve the issue during the phone
            conference, the meeting would fit within this deliverable. If the
            situation calls for additional work outside the scope of this
            deliverable, FHA would recommend we move the workload to our “Fair
            Housing Counselling” service Most Consult meetings usually fall well
            within the 60-minute range. Email Consultation: FHA is also
            accessible via email for less time sensitive fair housing counseling
            and advice needs; response time is within 24 hours via email.
            Real-Time Communications: FHA prides itself as being the de facto
            real-time online fair housing organization and is considering making
            itself available via other online real-time communications channels:
            Skype [video, text, and call], and Telegram [has point-to-point
            encryption]. \*This service is also offered for purchase separately.
            Contact FHA at info@fairhousingact.org to make arrangements. 5.
            Online Footprint Review An HOA’s message online can be responsible
            for initiating a fair housing investigation, testing, or even worse-
            a fair housing complaint. FHA can review your association’s online
            footprint to uncover any fair housing related concerns. A results
            report outlining any concerns can be provided. Online footprint may
            include: a) Association Website and all web pages b) Social Media:
            Facebook, Next Door [if applicable] c) Online Marketing &
            Advertising of Property- links provided by the association \*Review
            to occur during month of annual membership anniversary. 6. Board
            Member & Property Management Education Webinar FHA designed a basic
            fair housing training webinar which provides a broad overview of the
            federal Fair Housing Act for new hires, HOA board members, and
            property management staff. The webinar will cover housing
            discrimination on the basis of Race, Color, National Origin, Gender,
            Familial Status, and Disability. The webinar will also provide a
            small focus on the most common fair housing violations affecting
            disabled persons at HOA communities: * Reasonable accommodations:
            Emotional Support Animals, and parking spaces for the disabled *
            Reasonable modifications * Familial status discrimination and rules
            against children The webinar will have a live Q&A session to handle
            any immediate concerns by the new hire. The webinar will not provide
            state-specific fair housing training; all training is federal fair
            housing focused. \*This service is also offered for purchase
            separately. Contact FHA at info@fairhousingact.org to make
            arrangements. 7. Weekly Fair Housing Q&A Call This is a live open
            forum telephonic conference call for clients only. This is not a
            recorded call and will not be accessible afterwards. The Fair
            Housing Call will provide a real-time forum to address fair housing
            curiosities, hypotheticals, and general questions housing providers
            may have regarding the fair housing act. The call is an excellent
            opportunity to voice fair housing concerns, and pose challenging
            questions, which could shape future training modules. FHA may invite
            special guest speakers from the fair housing, legal, civil rights,
            and medical community. Anticipated call time of 60 minutes or more
            based upon activity. How Do You Get Started? FHA wants to provide
            you with the most impactful fair housing advice to protect your
            property, staff, and fair housing rights. Please provide FHA with a
            copy of your property’s Rules & Regulations, especially those
            written rules which address use of the pool, club house, and fitness
            center if you have them. Send your Rules & Regulations to FHA by
            email to: info@fairhousingact.org Use Subject heading: “Rules &
            Regulations Review” FHA’s fair housing expert will personally review
            your community’s rules & regulations to identify violations and soft
            spots. You will receive a markup pdf view email. The no cost review
            usually is completed within 48 hours of acknowledging receipt.
            Contact Us If you have any questions or requests, please reach us at
            info@fairhousingact.org or 877.838.9963
          </div>
        </div>
      </section>
    );
  }
}

export default Homeowners;
