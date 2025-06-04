import {check, Checklist, item} from "@/app/checklist/checklist-support";

export const vpeChecklist_RAAC: Checklist = {
    name: 'OO-VPE (RAAC)',
    phases: [
        {
            // Derived from POH 4-2, initial interior part
            name: 'Preflight - interior',
            checks: [
                check('Online trouble report', 'checked'),
                check('Master engine switch', 'off'),
                check('Avionics master switch', 'off'),
                check('Controls', 'free and correct'),
                check('Battery switch', 'on'),
                check('Flaps', 'check operation'),
                check('Fuel quantity', 'checked'),
                check('Fuel temperature', 'checked'),
                check('Water level', 'light off'),
                check('Battery switch', 'off'),
                check('POH and documents', 'on board & checked'),
                check('Baggage', 'secure'),
            ]
        },
        {
            // Derived from POH 4-2, walk-around part
            name: 'Preflight - exterior',
            checks: [
                item('Fuel filler cap').confirm('in place', 'secured'),
                item('Static vent').confirm('clean','unobstructed'),
                check('Main tank drain valve', 'actuated'),
                check('Optional tank drain valve', 'actuated'),
                item('Horizontal stabilizer').confirm('surface condition','hinge wear ok'),
                check('Rudder', 'check hinge wear ok'),
                check('Static vent', 'clean, unobstructed'),
                check('Flap and aileron', 'check condition and hinges'),
                check('Wing tip and lights', 'check condition'),
                check('Stall warning', 'clean, check actuation'),
                item('Right main landing gear').confirm('check', 'oil cap secured', 'panel closed', 'shock absorber compression', 'tire inflated'),
                check('Fuel drain valve', 'actuated'),
                item('Oil level').confirm('checked', 'oil cap secured', 'panel closed'),
                check('Exhaust pipe', 'rigid'),
                check('Engine cowl attachments', 'check'),
                check('Propeller', 'clean, in good condition'),
                check('Propeller spinner', 'no play'),
                check('Air inlets', 'clean, unobstructed'),
                check('Gear box oil level', 'check'), // Half of the inspection glass
                item('Nose gear').confirm('check attachment and fairing', 'shock absorber compression', 'tire inflated', 'tow bar removed'),
                check('Canopy cleanliness', 'check'),
                item('Left main landing gear').confirm('check attachment and fairing', 'shock absorber compression', 'tire inflated'),
                check('Pitot', 'clean, unobstructed'),
                check('Lights', 'glass clean'),
                check('Wing tip and lights', 'check condition'),
                check('Flap and aileron', 'check condition and hinges'),
            ]
        },
        {
            // Personal addition
            name: 'iPad startup',
            checks: [
                check('Aerolync', 'flight started'),
                check('Headset', 'on & bluetooth linked'),
                check('SafeSky', 'OO-VPE Take-off'),
                check('SkyDemon', 'Go Flying (GDL90)')
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Before start',
            checks: [
                check('Flightplan', 'filed').nightOnly(),
                item('POH').confirm('check latest edition', 'within reach'),
                check('Canopy', 'closed & locked'),
                check('Parking brake', 'locked'),
                check('Front seats', 'adjusted & locked'),
                check('Belts and harnesses', 'adjusted & fastened'),
                check('Flight controls', 'free and correct'),
                check('Trim', 'check travel & set for takeoff'),
                check('Battery switch', 'on'),
                check('CED lights auto test', 'monitor'),
                check('Alternator CB switch', 'on').markCritical(),
                check('Alarm panel', 'test, set day/night').markCritical(),
                check('Circuit breakers', 'on'),
                check('All electrical switches and avionics', 'off'),
                check('Navigation light', 'on').nightOnly(),
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Engine start',
            checks: [
                check('Strobe light', 'on'),
                check('Fuel level/temperature', 'check'),
                check('Fuel selector', 'on'),
                check('Alternate induction air', 'closed'),
                check('Electrical fuel pump', 'on'),
                check('Power lever', 'idle'),
                check('Propeller area', 'clear'),
                check('Master engine switch', 'on'),
                check('FADEC lights', 'check off').markCritical(),
                check('Glow control light', 'wait until off'),
                check('Starter', 'on'),
                check('Check', 'oil pressure/idle RPM 890'),
                check('Engine, CED light', 'acknowledge'),
                check('ALT light', 'check off').markCritical(),
                check('Voltage', 'check 14V').markCritical(),
                check('FADEC lights', 'check off').markCritical(),
                check('Vacuum gauge', 'check'),
                check('SkyDemon', 'log engine on'), // Personal addition
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'After start',
            checks: [
                check('Electrical fuel pump', 'off'),
                item('FADEC BACKUP BATTERY CHECK').markCritical().asSection(
                    item('Alternator').confirm('off', 'engine must operate normally'),
                    item('Battery').confirm('off for min. 10s', 'engine must operate normally', 'no red FADEC lights illuminated'),
                    check('Battery', 'on'),
                    check('Alternator', 'on'),
                ),
                check('Avionics switch', 'on'),
                check('COM/NAV, navigation instruments', 'set'),
                check('Altimeter', 'set'),
                check('Horizon/Directional gyro', 'set'),
                check('Landing light', 'on').nightOnly(),
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Warm up', // Made some formatting adjustments to better fit the format
            checks: [
                check('For quicker coolant warming', 'pull cabin heat'),
                check('Let engine warm', '~2min@idle'),
                item('Max 1400 RPM until').confirm('oil temp. >50°C', 'coolant temp. >60°C'),
                check('All CED LEDs', 'green')
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Taxi',
            checks: [
                check('Parking brakes', 'unlock'),
                check('Brakes', 'test'),
                item('During turns').asSection(
                    check('Turn coordinator/Horizon', 'check'),
                    check('Directional gyro', 'check operation & alignment'),
                    check('Standby magnetic compass', 'check')
                ),
            ]
        },
        {
            // Based on RAAC Checklist - but split in 3 parts
            name: 'Before take-off - pre',
            checks: [
                check('Parking brake', 'set'),
                check('Flight controls', 'free & correct'),
                check('Flight & nav instruments', 'check & set'),
                check('Cabin heat', 'set as required'),
                check('Fuel selector valve', 'on'),
                check('Fuel quantity', 'verify sufficient for flight'),
                check('Trim', 'set for take-off')
            ]
        },
        {
            // Based on RAAC Checklist - but split in 3 parts
            name: 'FADEC Self-Test',
            checks: [
                item("FADEC Self-Test").markCritical().asSection(
                    check('Power lever', 'idle (both FADEC lights off)'),
                    item('FADEC test button').confirm('press & hold', 'until completed'),
                    item('Both FADEC lights').confirm('on', 'RPM increases'),
                    check('FADEC => B', 'FADEC B light on'),
                    check('FADEC => A', 'FADEC A light on'),
                    item('During test').confirm('propeller controller is exited', 'RPM decreases momentarily'),
                    check('FADEC A light', 'off'),
                    check('RPM back to idle', 'test is completed'),
                    check('FADEC test button', 'release'),
                )
            ]
        },
        {
            // Based on RAAC Checklist - but split in 3 parts
            name: 'Before take-off - post',
            checks: [
                item('Power lever').confirm('full forward', 'rpm must be established', 'load min. 94%', 'rpm 2240-2300'),
                check('Power lever', 'idle'),
                check('Engine instruments & voltmeter', 'check'),
                check('Vacuum gauge', 'check'),
                check('Flaps', 'full down then to TO position'),
                check('Electrical fuel pump', 'on'),
                check('Radios & avionics', 'on and set'),
                check('Power lever friction', 'set as desired'),
                check('Brakes', 'release'),
                check('CED', 'check all green'),

                check('Departure briefing', 'reviewed')

                // Departure briefing includes:
                // Engine failure before take-off -> throttle idle & stop
                // Engine failure after take-off
                //   Best glide 78 kts
                //   No turns below 800 ft
                //   No turns more than 30 degrees left or right
                //   Nose in the wind, which is left/right
                // Normal procedure
                //   Rotate at 57
                //   Climb at 65 (until 10000 ft) -> 78
                //   First turn and direction, clearance
            ]
        },
        {
            // Not in RAAC checklist, but seems equally applicable for VPE
            name: 'Line-up',
            checks: [
                check('Approach area', 'clear'),
                check('Pitot heat', 'as required'),
                check('Landing light', 'on'),
                check('Strobe lights', 'on'),
                check('Transponder', 'ALT'),
                check('Threshold elevation', 'checked'),
                check('QFU', 'checked')
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Take-off', // Normal take-off!
            alternate: 'Approach',
            checks: [
                check('Power lever', 'full forward'),
                check('RPM before rotation', '2300 RPM'),
                check('TO-speed', '~57 KIAS'),
                check('Initial climb speed', '~65 KIAS'),
                check('After obstacle clearance', '~78 KIAS'),

                check('Flaps', 'up'),
                check('Electrical fuel pump', 'off'),
                check('Landing lights', 'off'), // Personal addition, to follow-up on line-up enabling...
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Climb', // Normal climb, flaps up
            checks: [
                item('Best rate of climb').asSection(
                    check('from 0 to 9500 ft', '~78 KIAS'),
                    check('up to 11500 ft', '~75 KIAS'),
                    check('above 11500 ft', '~72 KIAS'),
                ),
                check('Power lever', 'full forward'),
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Cruise',
            checks: [
                item('Power').confirm('max. 100%', 'prefer 75% or less'),
                check('Trim', 'adjust'),
                check('CED 125 and caution lamp', 'monitor constantly'),
                check('Fuel quantity and temperature', 'monitor'),
                check('FADEC warning light', 'monitor'),
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Descent',
            checks: [
                check('Power', 'as required'),
                item('Pull cabin heat to keep the coolant warm if power setting is low'),
                check('If coolant temperature in amber range & engine caution lamp illuminated', 'increase power to recover green coolant temperature range'),
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Approach',
            checks: [
                check('Electrical fuel pump', 'on'),
                check('Seats, belts', 'check'),
                check('Flaps', '1st notch < 92 KIAS'),
                check('Speed', '~ 81 KIAS'),
                check('Trim', 'adjust'),

                check('Landing lights', 'on'), // Personal addition
                check('Approach briefing', 'reviewed') // Personal addition

                // What constitutes the approach briefing ?
                // Runway in use ? Approach clearance ?
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Final',
            checks: [
                check('Flaps', '2nd notch < 81 KIAS'),
                check('Approach speed', '~62 KIAS'),
                check('Trim', 'set')
            ]
        },
        {
            // Based on RAAC Checklist 3.1
            name: 'Landing',
            alternate: 'Approach',
            checks: [
                item('Short landing').asSection(
                    check('Flaps', '2nd notch < 81 KIAS'),
                    check('Approach speed', '~62 KIAS'),
                ),

                item('Overshoot').asSection(
                    check('Power lever', 'full power'),
                    check('Speed', '~65 KIAS'),
                    item('Progressively raise flaps to 1st notch'),
                    item('establish normal climb speed').confirm('~75 KIAS'),
                ),
            ]
        },
        {
            name: 'After landing',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Flaps', 'up'),
                check('Landing light', 'off', ['day']), // Personal addition
                check('Transponder', 'standby'), // Personal addition
            ]
        },
        {
            name: 'Shutdown',
            checks: [
                check('Parking brake', 'set'),
                check('Power lever', 'idle'),
                check('Flaps', 'down'),
                check('Avionics switch', 'off'),
                item('electrical equipment').confirm('off', 'except strobe'),
                check('Engine master switch', 'off'),

                check('Engine', 'await stop'),
                check('Strobe', 'off'),
                check('Battery switch', 'off'),
                check('Wheel shocks in place', 'release parking brake'),
            ]
        },
        {
            name: 'iPad shutdown',
            alternate: 'iPad startup',
            checks: [
                item('SkyDemon').confirm('log engine off', 'back to planning mode'),
                check('Headset', 'off'),
                check('SafeSky', 'flight closed'),
                check('Aerolync', 'flight completed')
            ]
        }
    ]
}
