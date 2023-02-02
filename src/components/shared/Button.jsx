import { Box } from '@mui/material';
import { PrimaryButton } from 'components/shared/styled';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Button({
  linkTo,
  linkText,
  width,
  disabled,
  type,
  value,
  ...props
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isExternalLink = linkTo.type === 'external';

  const handleClick = (to) => {
    if (to === '/contact' && pathname === '/services_and_fares/promotions/') {
      const contactMessage = value;

      const message = `Dear AB team,\n\nI am interested to claim one or more of the ${contactMessage}, please contact me as soon as possible.\n\nKind regards,`;
      navigate(to, {
        state: { contactMessage: message },
      });
    } else {
      navigate(to);
    }
  };

  return isExternalLink ? (
    <Box
      sx={{
        width: width && width,
      }}
    >
      <PrimaryButton
        disabled={disabled}
        type={type}
        title={value}
        id={value}
        href={linkTo.URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </PrimaryButton>
    </Box>
  ) : (
    <Box
      sx={{
        width: width && width,
      }}
    >
      <PrimaryButton
        disabled={disabled}
        type={type}
        title={value}
        id={value}
        onClick={() => handleClick(linkTo.URL)}
      >
        {linkText}
      </PrimaryButton>
    </Box>
  );
}
