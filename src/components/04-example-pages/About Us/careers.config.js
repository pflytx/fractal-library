module.exports = {
  context: {
    body: `
      <h2 class="heading heading--h2">
        Why work at Lytx?
      </h2>

      <p>
        You want to join a team of hungry, humble, and capable people and dedicate your time and talent to making a difference in our world. At Lytx, you’ll work to apply cutting edge technology to improve safety and save on our roadways.
      </p>
      <p>
          Being part of a market-leading, medium-sized technology company means that there's room for you to learn, grow, and make a significant impact.
      </p>
    `,
    lists: [
      {
        mediaBody: true,
        marginLeft: false,
        features: [
          {
            icon: `icon-ai-brain`,
            heading: 'INTEGRATED MV+AI',
            body: `<p>Advanced Machine Vision and Artificial Intelligence capture and accurately categorize risky driving behaviors</p>`
          },
          {
            icon: 'icon-alerts',
            heading: 'REAL-TIME, IN-CAB ALERTS',
            body: `<p>Light and audio alerts notify drivers of their risky behaviors, helping them stay focused on the road (audio alerts available on SF300 only)</p>`
          },
          {
            icon: 'icon-mic',
            heading: 'INTEGRATED MICROPHONE',
            body: `<p>Sound recordings from inside and outside the vehicle ensure that you’ll have all the details when an incident occurs</p>`
          },
          {
            icon: 'icon-low-light',
            heading: 'Low-light visibility',
            body: `<p>An 8-lumen infrared light provides clear visibility, even at night.</p>`
          },
          {
            icon: 'icon-wide-angle',
            heading: 'WIDE-ANGLE DUAL LENS',
            body: `<p>Our wide angle, dual lens shares the big picture — on the road and inside your vehicle.</p>`
          }
        ]
      },
      {
        mediaBody: true,
        marginLeft: true,
        features: [
          {
            icon: 'icon-truck',
            heading: 'Support for side and back-up views',
            body: `<p>Connect up to four additional cameras using the Lytx Hub Adapter and additional SF-Series or third party auxiliary cameras</p>`
          },
          {
            icon: 'icon-continual',
            heading: 'Continual video',
            body: `<p>Records up to 100 hours of reliable, continual video</p>`
          },
          {
            icon: 'icon-engine',
            heading: 'ECM Connected',
            body: `<p>Captures speed, fuel, and vehicle data directly from your vehicle</p>`
          },
          {
            icon: 'icon-rec',
            heading: 'MANUAL RECORD BUTTONS',
            body: `<p>Enables your drivers to proactively record video when needed</p>`
          },
          {
            icon: 'icon-updates',
            heading: 'Automatic updates',
            body: `<p>System and firmware updates are made over-the-air, with no manual downloads</p>`
          },
        ]
      }
    ],
    tabs: [
      {
        id: 'tab-sandiego-control',
        title: 'San Diego, CA',
        checked: true,
        tabName: 'locationTabs',
        body: `
          <h2 class="heading heading--h2">
            San Diego, CA
          </h2>

          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            <a href="#">9785 Towne Center Drive, San Diego, California 97121</a>
            <br>
            Phone: +1 (858) 430-0400
            <br>
            Fax: +1 (858) 430-4001
          </p>
        `

      },
      {
        id: 'tab-brookfield-control',
        title: 'Brookfield, WI',
        checked: false,
        tabName: 'locationTabs',
        body: `
          <h2 class="heading heading--h2">
            Brookfield, WI
          </h2>

          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            <a href="#">9785 Towne Center Drive, San Diego, California 97121</a>
            <br>
            Phone: +1 (858) 430-0400
            <br>
            Fax: +1 (858) 430-4001
          </p>
        `
      },
      {
        id: 'tab-farmingham-control',
        title: 'Farmingham, MA',
        checked: false,
        tabName: 'locationTabs',
        body: `
          <h2 class="heading heading--h2">
          Farmingham, MA
          </h2>

          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            <a href="#">9785 Towne Center Drive, San Diego, California 97121</a>
            <br>
            Phone: +1 (858) 430-0400
            <br>
            Fax: +1 (858) 430-4001
          </p>
        `
      },
      {
        id: 'tab-milton-control',
        title: 'Milton Keynes, UK',
        checked: false,
        tabName: 'locationTabs',
        body: `
          <h2 class="heading heading--h2">
            Milton Keynes, UK
          </h2>

          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            <a href="#">9785 Towne Center Drive, San Diego, California 97121</a>
            <br>
            Phone: +1 (858) 430-0400
            <br>
            Fax: +1 (858) 430-4001
          </p>
        `
      }
    ]
  }
};
