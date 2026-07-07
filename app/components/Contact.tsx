'use client';

import { useState } from 'react';
import {
  ArrowRight01Icon,
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  Location01Icon,
  Call02Icon,
  Mail01Icon,
  CheckmarkCircle02Icon,
  Directions01Icon,
  WhatsappIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Facebook01Icon,
} from '@hugeicons/core-free-icons';
import { Reveal } from './motion';
import { Icon } from './ui/hugeicon';

const FIELD =
  'w-full rounded-xl border border-line bg-paper/50 px-4 py-3.5 text-ink outline-none transition duration-300 placeholder:text-muted/80 focus:border-accent focus:bg-card focus:ring-4 focus:ring-accent/10';
const LBL =
  'mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted';

const ADDRESS =
  '1441/30, First Floor, VKV Ln Rd, Chembumukku, Vazhakkala, Kochi, Kerala 682030';
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Orbinoz+Event+Planners+Pvt+Ltd+Kochi';
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0870132832065!2d76.32189347475835!3d10.009671272868792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2737e1ea6f%3A0x38c6f7a56727381c!2sOrbinoz%20EventPlanners%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776634907486!5m2!1sen!2sin';
const WHATSAPP_LINK = 'https://wa.me/919744458580';

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/orbinozevents/',
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/orbinoz',
    icon: Linkedin01Icon,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/orbinoz',
    icon: NewTwitterIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/orbinozevents',
    icon: Facebook01Icon,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id='contact' className='scroll-mt-24 bg-paper-2 py-24 sm:py-32'>
      <div className='mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20'>
        <div>
          <Reveal>
            <p className='eyebrow'>Get in touch</p>
          </Reveal>
          <h2 className='mt-6 font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-light leading-[0.98] tracking-[-0.03em] text-ink'>
            <Reveal>Let&apos;s build</Reveal>
            <Reveal delay={0.08}>
              <span className='italic text-accent'>the next one.</span>
            </Reveal>
          </h2>
          <Reveal delay={0.12}>
            <p className='mt-7 max-w-md text-lg leading-relaxed text-ink-2'>
              Tell us what you&apos;re planning. We reply to every brief
              personally, usually within one business day.
            </p>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={0.16}>
            <div className='mt-10 flex flex-col gap-6'>
              <div className='flex items-start gap-4'>
                <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent'>
                  <Icon icon={Location01Icon} size={19} />
                </span>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.12em] text-muted'>
                    Studio
                  </p>
                  <p className='mt-1 text-ink'>
                    Chembumukku, Vazhakkala,
                    <br />
                    Kochi, Kerala 682030
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent'>
                  <Icon icon={Call02Icon} size={19} />
                </span>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.12em] text-muted'>
                    Call
                  </p>
                  <p className='mt-1'>
                    <a href='tel:+914843504541' className='link-underline text-ink'>
                      +91 484 350 4541
                    </a>
                  </p>
                  <p>
                    <a href='tel:+919744458580' className='link-underline text-ink'>
                      +91 97444 58580
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent'>
                  <Icon icon={Mail01Icon} size={19} />
                </span>
                <div>
                  <p className='text-xs font-medium uppercase tracking-[0.12em] text-muted'>
                    Email
                  </p>
                  <p className='mt-1'>
                    <a
                      href='mailto:info@orbinozevents.com'
                      className='link-underline text-ink'
                    >
                      info@orbinozevents.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Socials + WhatsApp */}
          <Reveal delay={0.2}>
            <div className='mt-8 flex flex-wrap items-center gap-3'>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.label}
                  className='flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink-2 transition-colors duration-300 hover:border-accent hover:text-accent'
                >
                  <Icon icon={s.icon} size={18} />
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5b]'
              >
                <Icon icon={WhatsappIcon} size={18} />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {sent ? (
            <div className='flex h-full min-h-80 flex-col items-start justify-center gap-4 rounded-2xl bg-card p-10 shadow-[0_30px_70px_-40px_rgba(20,19,15,0.35)]'>
              <Icon
                icon={CheckmarkCircle02Icon}
                size={44}
                strokeWidth={1.5}
                className='text-accent'
              />
              <h3 className='font-display text-4xl font-light text-ink'>
                Brief received.
              </h3>
              <p className='max-w-sm text-ink-2'>
                It&apos;s with the team. Expect a personal reply from Orbinoz
                within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className='rounded-2xl bg-card p-6 shadow-[0_30px_70px_-40px_rgba(20,19,15,0.35)] sm:p-9'
            >
              <div className='grid gap-5'>
                <div>
                  <label htmlFor='name' className={LBL}>
                    Full name
                  </label>
                  <input
                    id='name'
                    required
                    placeholder='Jane Doe'
                    className={FIELD}
                  />
                </div>
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='email' className={LBL}>
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      required
                      placeholder='jane@company.com'
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor='company' className={LBL}>
                      Company
                    </label>
                    <input
                      id='company'
                      placeholder='Company'
                      className={FIELD}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='type' className={LBL}>
                    Event type
                  </label>
                  <div className='relative'>
                    <select
                      id='type'
                      required
                      defaultValue=''
                      className={`${FIELD} appearance-none pr-11`}
                    >
                      <option value='' disabled>
                        Select one…
                      </option>
                      <option>Conference / Summit</option>
                      <option>Product Launch</option>
                      <option>Dealer / Partner Meet</option>
                      <option>Awards / Gala</option>
                      <option>Brand Activation</option>
                      <option>Something else</option>
                    </select>
                    <Icon
                      icon={ArrowDown01Icon}
                      size={18}
                      className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='msg' className={LBL}>
                    Tell us about the event
                  </label>
                  <textarea
                    id='msg'
                    rows={4}
                    placeholder='A few words on what you have in mind…'
                    className={`${FIELD} resize-none`}
                  />
                </div>
                <button
                  type='submit'
                  className='btn-solid mt-1 w-full justify-center'
                >
                  Send brief
                  <Icon icon={ArrowRight01Icon} size={16} />
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>

      {/* Map */}
      <div className='mx-auto mt-16 max-w-[1440px] px-5 sm:mt-20 sm:px-8'>
        <Reveal>
          <div className='relative overflow-hidden rounded-2xl shadow-[0_40px_90px_-50px_rgba(20,19,15,0.45)]'>
            <iframe
              title='Orbinoz Event Planners, Kochi'
              src={MAP_EMBED_SRC}
              className='block h-[min(22rem,52vh)] w-full border-0 grayscale-[0.2]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
