import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"
import SocialIcons from "./SocialIcons"

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />

                <Flex className="footer-flex">
                    <ul>
                        <li>
                            <img src="./images/icon-location.svg" alt="location-icon" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li>
                            <img src="./images/icon-phone.svg" alt="phone-icon" />
                            +1-543-123-4567
                        </li>
                        <li>
                            <img src="./images/icon-email.svg" alt="email-icon" />
                            example@huddle.com
                        </li>
                    </ul>
                    <ul className="footer-links">
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul className="footer-links">
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons/>
                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved</p>
                <p>Made by <a href="https://github.com/foufouboy">foufouboy</a></p>
            </Container>
        </StyledFooter>
    )
}