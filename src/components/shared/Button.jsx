import { Box } from '@mui/material';
import { PrimaryButton } from 'components/shared/styled/index.jsx';
import { useLocation } from 'react-router-dom';

export default function Button({
  linkTo,
  linkText,
  width,
  disabled,
  type,
  value,
  marginTop,
  ...props
}) {
  const { pathname } = useLocation();
  const isExternalLink = linkTo.type === 'external';
  const isPromoContactEnquire =
    linkTo.URL === '/contact' &&
    pathname.includes('/services_and_fares/promotions');

  const setContactMsg = () => {
    const contactMessage = value;
    const message = `Dear AB team,\n\nI am interested to claim one or more of the ${contactMessage}, please contact me as soon as possible.\n\nKind regards,`;
    return { contactMessage: message };
  };

  return (
    <Box
      sx={{
        width: width ? width : undefined,
        marginTop,
      }}
    >
      <PrimaryButton
        disabled={disabled}
        type={type}
        title={value}
        id={value}
        to={linkTo.URL}
        state={
          !isExternalLink && isPromoContactEnquire ? setContactMsg() : undefined
        }
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {linkText}
      </PrimaryButton>
    </Box>
  );
}
