module.exports = {
  context: {
    lists: [
      {
        mediaBody: false,
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
          },
        ]
      },
      {
        mediaBody: false,
        marginLeft: false,
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
    spectables: [
      {
        heading: 'Event Recorder Unit',
        specs: [
          {
            label: 'Weight',
            detail: '.74 lb (336g) [.8 lb 363g]'
          },
          {
            label: 'Dimensions (W x H x D)',
            detail: '5.0 x 4.2 x 2.2 in'
          },
          {
            label: 'Operating Temperature',
            detail: '-40 °F to 185 °F'
          },
          {
            label: 'Microphone',
            detail: 'Omnidirectional'
          },
          {
            label: 'Speaker',
            detail: 'SF300: Yes.   SF64: No'
          },
          {
            label: 'Status Lights',
            detail: '7 LED (wide spectrum)'
          },
          {
            label: 'Audible Alerts',
            detail: 'SF300: Yes.   SF64: No'
          },
          {
            label: 'Night Vision Illumination',
            detail: '8 high-lumen infrared LED lights'
          },
          {
            label: 'Manual Record Buttons',
            detail: 'Yes'
          },
          {
            label: 'Industrial-grade Hardware',
            detail: 'Yes'
          },
          {
            label: 'Limited Warranty',
            detail: '2 Years'
          }
        ]
      },
      {
        heading: 'Power',
        specs: [
          {
            label: 'Battery',
            detail: `SF300: Rechargeable<br>
                SF64: Non-rechargeab`
          },
          {
            label: 'Standard Input Voltage',
            detail: '12V or 24V'
          },
          {
            label: 'Power Input',
            detail: 'Molex'
          },
          {
            label: `Current Draw (12V)<br>
                Ignition On (cellular)<br><ul class="list--unordered"><li>Not Transmitting</li></ul>`,
            detail: `SF300: 320 mA<br>
                SF64: 228 mA`
          },
          {
            label: `Current Draw (12V)<br>
                Ignition On (cellular)<br><ul class="list--unordered"><li> Transmitting</li></ul>`,
            detail: `SF300: 540 mA<br>
                SF64: 438 mA`
          },
          {
            label: 'Current Draw',
            detail: '20 mA'
          }, {
            label: 'Deep Sleep',
            detail: '1 mA'
          }, {
            label: 'Power Loss Operation',
            detail: 'Finish recording event'
          }, {
            label: 'Disconnect Reporting',
            detail: 'Yes'
          }, {
            label: 'Hibernation',
            detail: 'Default: 15 Min; Max: 60 hr'
          }
        ]
      },
      {
        heading: 'Internal',
        specs: [
          {
            label: 'Processor',
            detail: 'Dual-core 1GHz'
          },
          {
            label: 'Internal Memory',
            detail: 'SF300: 80 GB SF64: 64 GB'
          },
          {
            label: 'Memory Format',
            detail: 'eMMC'
          },
          {
            label: 'Expandable/External Memory',
            detail: 'SF300: Expandable to 208 GB<br>SF64: No'
          },
          {
            label: 'Motion Sensors',
            detail: '<ul class="list--unordered"><li>9-axis (Accelerometer + Gyro + Magnetometer)</li><li>Built-in G-Force and motion sensor</li><li>Built-in GPS</li></ul>'
          },
        ]
      },
      {
        heading: 'Installation',
        specs: [
          {
            label: 'Trigger In',
            detail: 'Qty 4'
          },
          {
            label: 'Trigger Out',
            detail: 'Qty 1'
          },
          {
            label: 'ECM / ECU Integration',
            detail: 'J1939 (250/500 kbps)'
          },
          {
            label: 'Recommended Mounting Location',
            detail: 'Windshield Bulkhead'
          },
          {
            label: 'Installation Services Available',
            detail: `Lytx Professional Installation Services<br>
                Client-managed Installation Support`
          }
        ]
      },
      {
        heading: 'Recording',
        specs: [
          {
            label: 'Wide Angle Lens / Field of View',
            detail: '131° interior; 82° exterior'
          },
          {
            label: 'Video Recording Resolution',
            detail: '752 x 548 [1280x800]'
          },
          {
            label: 'Frame Rate',
            detail: '10 fps'
          },
          {
            label: 'Configurable View Options',
            detail: 'Yes'
          }
        ]
      },
      {
        heading: 'Included Accessories',
        specs: [
          {
            label: 'The purchase of a DriveCam Event Recorder includes:',
            detail: `
                  <ul class="list--unordered">
                    <li>Cables for Standard Installation (power cable, vehicle interface cable)</li>
                    <li>Mounting Bracket with Screws</li>
                    <li>Security Retention Clip</li>
                    <li>Informational Guide</li>
                  </ul>`
          }
        ]
      },
      {
        heading: 'Connectivity',
        specs: [
          {
            label: 'Cellular',
            detail: `NORTH AMERICA<br>
                SF300: 4G LTE (3Gfallback), SF64: 4G LTE (3Gfallback)<br><br>
                WESTERN EUROPE (UK)<br>
                SF300: N/A, SF64: 4G LTE (3Gfallback)<br><br>
                REST OF WORLD (SA/AU/NZ)<br>
                SF300: N/A, SF64: 3G/2G`
          },
          {
            label: 'Wi-Fi via Hotspot',
            detail: 'SF300: Dual-band Wi-Fi b/g/n/ac<br>SF64: N/A'
          },
          {
            label: 'Bluetooth Connectivity',
            detail: 'Yes'
          },
          {
            label: 'Ethernet',
            detail: 'Yes'
          }
        ]
      }
    ]
  }
};
