module.exports = {
  context: {
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
