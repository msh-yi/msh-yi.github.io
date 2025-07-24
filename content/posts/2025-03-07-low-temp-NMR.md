---
title:  "A Practical Guide to in operando Low-Temperature NMR Spectroscopy"
date: 2025-03-07
section: chemistry
category: misc
---

This tutorial provides a set of instructions for NMR monitoring of a live reaction at low temperature I500 instrument (Varian Unity/Inova500) with Vnmrj Version 3.2 Revision A at the Laukien-Purcell Instrumentation Center, Harvard Chemistry and Chemical Biology. This guide presumes basic competencies with locking, shimming, and acquiring a 1D spectrum are assumed. The level of detail varies throughout the tutorial, which was mostly written for this user's own reference.

While the following procedure is specific to Diffusion-ordered spectroscopy (DOSY), the following steps can be adapted to any type of experiment.

On DOSY: A low-temperature DOSY is useful to determine the effective molecular weights of NMR-active species under reaction-relevant conditions. For tracking low-concentration species that are difficult to track by <sup>1</sup>H NMR due to low signal-to-noise or overlapping signals with other species, heteronuclear (non-<sup>1</sup>H) DOSY (e.g. <sup>19</sup>F, <sup>31</sup>P) may be a useful alternative.

`$ <command>` refers to typing "command" into the console in Vnmrj.

The general workflow is:
1. cool down the instrument
2. insert the sample, lock and shim
3. tune the probe
4. optimize the 1D pulse sequence for nucleus of interest
5. run the DOSY experiment
6. warm up the instrument, tune the probe back

## 1. Cool down the instrument
Ensure that the airflow into the probe is nitrogen and not compressed air. Switch the air line located behind the computer from the green line to the red line. Vnmrj > Start > Setup Hardware, then Spin/Temp > Reset VT controller. Temperature > enter 10 into the box, hit Enter, click Regulate Temp. Set VT Air Flow 40 l/min, click VT Air On.

Fill the styrofoam pail halfway with liquid nitrogen. Raise the pail over the cooling coil, positioning the metal latches on the pail to line up with the notches under the holder. Rotate the pail until it is securely held, with the cardboard pieces supporting under if necessary.

The temperature displayed on the VT control panel should start decreasing. When the temperature reaches 5 deg C, lower the regulated temperature to -10. Continue decreasing the temperature by 20 deg C increments until reaching the desired temperature. Remember to type in the desired temperature, hit Enter, and then click Regulate Temp for the VT controller to register the new setpoint. The low limit for the probe is -80 deg, and it is not advisable to go lower than -70 deg. When approaching the setpoint, the VT controller will slow down the cooling rate.

## 2. Prepare the sample and insert into the instrument
It may be necessary for the sample to be kept cold after preparation (e.g. a live reaction). The preferred option is to prepare the sample containing the live reagents in the lab and transport it downstairs in a dry ice/acetone bath (-78 deg C). Do NOT attempt to use liquid nitrogen for this purpose, even if it might seem appealing. The consequence has always been a shattered tube due to abrupt freezing and expansion of the sample. 
One possible procedure is:
1. With an NMR tube septum, cap the desired NMR tube. The NMR tube needs to be a Precision tube, at least 528-PP-7 Wilmad grade. Quartz tubes are not advised as they are brittle and shatter upon freezing.
2. Prepare a stock solution of the reaction without the initiator in a vial, and transfer the appropriate amount to the tube.
3. Insert the tube into a spinner and position it with a depth gauge.
4. Cool the tube (in the spinner) in a dry ice/acetone bath under positive N2 pressure using a spaghetti line.
5. Remove the spaghetti line and place the entire Dewar containing the sample in the -80 deg freezer for 10 min to cool the entire tube-spinner setup, including the top.
6. Remove the Dewar from the freezer. Using a long grey needle, inject the initiator (or a stock solution of it) slowly into the tube.
7. Cool the tube in the freezer for 5 mins.
8. Mix the contents of the tube by **quickly** inverting the tube twice (or more for more viscous solvents). Minimize the time the sample spends outside the bath. Tip: to get better mixing, invert the tube, and swish the tube from side to side as the solution is flowing downwards. When reverting the tube upright, place the bottom of the tube back into the bath before removing it to invert again. Manipulate the tube/spinner setup by holding the spinner rather than the tube to prevent warming the sample up by touch. Note the time of initiator addition.
9. The reaction should now be mixed and proceeding. Bring the Dewar downstairs to the instrument.

At this point, ensure that the instrument contains the dummy sample, rather than another tube. At low temperatures, the dummy sample seems to eject much faster than a tube, and we want to minimize the sample switching time. The next phase is moving our sample from the bath into the NMR instrument, which is one major opportunity for unintended sample warming.

Bring the Dewar close to the instrument, and place it on one of the supporting metal legs as a platform. Prepare a few Kimwipes on hand. Start> Standard> Eject. While the dummy sample is floating, slowly raise the spinner portion of the setup up from the bath and wipe off the acetone. Raise the rest of the NMR tube out of the bath  and quickly wipe off the acetone and potential condensation/ice. Bring the tube up to the top of the instrument and swap it with the dummy sample. Use the switch next to the sample entrance (flick up then down) to insert the sample.

## 3. Lock and Shim

Start > Spin/Temp > Set spin to 20 > Enter > Regulate Speed. This helps the sample thermally equilibrate. After equilibration (e.g. 5 min), turn off the spin. **The rest of the procedure should be done without spinning.** While this is occurring, or once you are sure your sample is close to the right temperature, find z0, lock, and shim the standard way. If this is not a time-sensitive sample, Channel 1 on the spectrometer should have been tuned to 1H to start. Measure the 1H spectrum to assess the shim quality. Gradient Autoshim from default shims is usually fine but not guaranteed to work if the default shims are quite different from the optimal shims at low temperature.

Save the spectrum to save the shims. For future time-sensitive samples, it might be desirable to use these shims, which can be achieved by Start > Shim > Load Shims from Pars

## 4. Tune the probe
On the I500, Channel 1 has been designated for <sup>1</sup>H (resting state), <sup>19</sup>F, and other nuclei, while channel 2 is designated for <sup>31</sup>P. (This may have changed.) It may be necessary to tune the probe to the nucleus of interest. Tuning requires training with LPIC staff so the instructions here are left deliberately vague.

Experiment Selector > Liquids > Std 1D > (nucleus of interest). This loads the 1D experiment for that nucleus. `$ qtune ` opens up the tuning interface. Nucleus > (nucleus of interest). Set span to 70 Hz. Start Probe Tune. Scale > Autoscale. Go to the probe and turn the knob to line up the dip with the center line. The Match knob can be used to maximize the amplitude of the peak (but tends not to produce much of an effect). 

Even if measuring on the nucleus for which the probe was tuned to at room temperature, it is recommended to tune the probe at low temperature for optimum signal.

## 5. Optimize the 1D pulse sequence
A typical 1D pulse sequence comprises the following time parameters. We will want to optimize each of them separately.
| parameter        | variable in Vnmrj | purpose |
|------------------|-------------------|---------|
| relaxation delay | `d1`                | delay between scans, to wait for the nuclei to fully relax before pulsing again       |
| pulse width      | `pw`                | length of the pulse, correlated with RF power (`tpwr`)       |
| acquisition time | `at`                | time for which the receiver acquires the signal       |

### 5.1 Relaxation delay
Having a sufficiently long relaxation delay is necessary so that the decay between entries is due to DOSY and not to insufficient relaxation. With the 1D experiment selected (Experiment Selector > Liquids > Std 1D > (nucleus of interest)), `$ d1=10, 5, 2, 1, 0.5, 0.2, 0.1` to set up an array of `d1` values to test. Check that the array is set up properly by `$ da` then Acquire > Overview. Set the number of scans to 4 or 8 (Acquire > Defaults > Number of Scans) then click the green Acquire button.

After acquisition is done, `$ dssh dssl` to view the collected spectra, horizontally stacked. Ideally you should see the intensity of the signal increase then plateau with increasing `d1`. The `d1` at which the intensity starts to plateau is the desired value; you can fine-tune this value by setting up another array at smaller intervals.

Save the spectrum and record the optimal `d1`.

### 5.2 Pulse width
For DOSY we want to apply a 90 deg pulse (i.e. that flips the spins to the equator and produces the largest signal). The pulse width (in ms) directly correlates with the power: the higher the power, the shorter the pulse width. Empirically, it has been found that the pulse width ideally should be less than 10 us. A higher power (get with `$ tpwr?` and set with `$tpwr=62`) allows for a shorter pulse width, so it is advisable to set the power as high as possible (63 is the limit on the I500) to allow for a short pulse width.

For this experiment, the `d1` does not need to be the optimal value from above, so to save time is is advisable to set `$ d1=1` or some similar small value, as long as the signal amplitude is reasonable.

We determine the 90 deg pulse width (`pw90`) by determining the `pw360` and then dividing that value by four. Set up array of pulse widths `$ array('pw', 5, 5, 10)` From left to right, the first 10 is the number of steps in the array, the 5 is the starting value, and the second 10 is the increment. This is therefore equivalent to `$ pw=5, 15, 25, 35, 45, 55`. Since our desired `pw90` is less than 10, we ideally do not have to run the pw past ca. 50. Run this array by clicking the green Acquire button.

We should see the amplitude of the signal to vaguely follow a cosinusoidal envelope as the `pw` increases, i.e. the amplitude should be large at the first entry, decrease, invert, and pass through zero. The `pw360` that we want is the `pw` value that leads to a null signal (i.e. when the amplitude passes back through zero). As with the `d1` optimization, repeat the search for `pw360` using a finer-grained array.

During the `pw` array, it is possible that an "ADC overflow" warning may occur. This is because the amplitude of the received signal is too large. Feel free to ignore this warning, unless the acquisition aborts due to this error. This can be remedied by decreasing the receiver gain (Acquire > Defaults > Receiver Gain) to a suitable value.

With a suitable `pw360` determined, set the pulse width `$ pw90=<pw360 value>/4` then `pw=pw90`.

Record the `pw90`, acquire a 1D spectrum, and save it.

### 5.3 Acquisition time
We want an acquisition time that lasts for as long as the FID signal is decaying, but not any longer (i.e. we want to truncate any fully decayed noise if present.) To do this, set up the so-far optimal pulse sequence: `$ d1= <optimal d1 value> pw=<optimal pw90 value> nt=<suitable number of scans for production>`. Acquire a 1D spectrum.

When acquisition is done, `$ df` to show the FID signal. Choose a timepoint at which there is ~2-3% of signal left, and set the acquisition time to that window. Times are usually on the order of 0.01 to 1 ms. Set the optimal acquisition time `$ at=<optimal value in ms>`. 

Acquire a 1D spectrum and save it. If the spectral window is very large, particularly for heteronuclear spectra, zoom into the region of interest and click the blue MoveSW button. Acquire again and save the spectrum. The pulse sequence is now optimized for DOSY.

## 6. Run the DOSY experiment
Taskbar > Experiments > Convert Current Parameters to Do > DOSY Experiments > 2D DOSY > ONESHOT-DOSY

This will use the optimized pulse sequence to set up DOSY run. The DOSY run involves multiple 1D measurements at different gradient strengths. The software will set up the array of gradients to be run (usually 15 increments), and it is generally not necessary to change the defaults (Acquire > Defaults > DOSY Setup)

The decay of the signal amplitude across the gradient array depends on the diffusion constant $D$ exponentially

$$ I \propto e^{D} $$

$D$ can further be related to the molecular weight of a particular species. For optimal decay, we want the amplitude of the signal at the highest gradient value to be around 5-10% of the initial signal. The pertinent parameters to be optimized are diffusion gradient length ($\delta$) and diffusion delay ($\Delta$). The following explanation for the various parameters is taken from a University of Michigan handout.

*Of particular importance for this experiment are three parameters. The Diffusion delay (`del`) is the amount of time allowed for the molecules to diffuse. Larger molecules will move slower and may require long periods of time for an accurate measurement, while small molecules move faster and require short diffusion delays. If the diffusion delay is set too short, the peaks will not have enough time to decay sufficiently for an accurate determination; and if it is too long, the signals will decrease in intensity to zero well before the end of the experiment and the last few spectra will contain only noise. Additionally, the diffusion delay should not be too long because signal intensity also decreases due to relaxation during this delay and thermal convection processes have more time to interfere with the experiment. It is for those reasons that in general the diffusion delay should be between 50 and 200 ms. If more time is required, it is better to increase the diffusion gradient length (`gt1`) instead. For example, a gradient length of 2 ms with a delay of 400 ms is equivalent to a gradient of 4 ms with a delay of 200 ms. Good values to start for medium size organic molecules in low viscosity solvents are: diffusion gradient length = 2 ms, diffusion delay = 200 ms. Double the gradient length for water and other viscous solvents. Change the values of these parameters in the parameter panel as shown.*

To test out parameters, Vnmrj provides an option to run a coarse gradient array (8 gradient values rather than 15). Set the number of scans to a smaller value (e.g. 4 or 8) and Acquire > Defaults > DOSY Setup > Setup corase gradient array. The estimated time will be displayed on the console output. Click OK and Acquire. **For DOSY acquisition, always click the green Acquire button rather than `$ ga`.**

There is the option to interleave scans, i.e. measure a block size-worth of scans across the gradient array, then the second, etc. This is recommended for various reasons: it is possible to monitor the progress of DOSY acquisition across the entire array during the run, rather than only watch one array entry complete. More importantly, for samples whose compositions may be changing over time, interleaving helps average out any potential changes by having contributing measurements from various timepoints to each entry in the array. Granted, it is not a good idea to measure DOSY on a species whose concentration is changing and will confound the amplitude of the signal; monitoring catalyst is fine.

Observe the resulting DOSY spectrum and tune the parameters accordingly. For the final production run, increase the number of scans, and Acquire > Defaults > DOSY Setup > Setup DOSY using conditions above. Run and **remember to save** once done.

Given that the block size is sufficiently small, measurement progress can be monitored by `$ wft dssh dssl`. If phasing is a problem, phase the first spectrum and the rest should be phased accordingly: `$ ds(1) f full aph dssh`

## 7. Warm up the instrument and tune the probe back
Eject the sample and replace it with the dummy sample. Unlatch and lower the bucket from the cooling coil. Start > Spin/Temp > raise the temperature by 20 deg C. Wait for temperature to approach within 5 deg C of the target before raising again by 20 C. Repeat until + 20 deg C. Keep the VT regulation on for 1 h: the regulator will continue to blow room temperature air through the probe, which is still much colder than rt at this point despite the monitor reading. This will prevent condensation around the probe.

After 1 h, if necessary, switch the airflow back from nitrogen (red) to compressed air (green). Tune Channel 1 back to <sup>1</sup>H.

## 8. Safety and precautions
Drastic temperature changes to the glass NMR tube mean a high risk of breakage. This necessitates extra care when handling cold glass tubes. It is possible that the tube may shatter while in the probe. If you experience a sudden loss in lock signal and/or smell your solvent emanating from the top of the sample entrance, eject your (possibly broken) tube immediately, being careful of broken glass, and notify the LPIC staff. Meanwhile, warm up the instrument to a normal temperature. The probe will require, at the very least, removal and cleaning, and possibly a costly repair. This implies a downtime of a day to a few weeks.

In case it bears saying: NEVER travel in the elevator with a liquid nitrogen Dewar.

## 9. Acknowledgements

Dr. Dongtao Cui and Anthony Lowe are gratefully acknowledged for many hours of training, troubleshooting, and instrument repairs resulting from my incompetence-induced accidents.